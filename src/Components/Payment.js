import React, { useEffect, useRef, useState } from 'react';
import CustomerSearchModal from "./CustomerSearchModal";
import DiscounrSelectModal from "./DiscountSelectModal";
import { Formik, Form } from "formik";
import * as PaymentService from "../Services/payment/PaymentService"
import "../Assets/Styles/payment.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PdfDoc from './PdfDoc';

function Payment() {
    const pdfExportComponent = useRef(null);
    const handleExportPdf = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.handleExportPdf();
        }
    };
    const [productBill, setProductBill] = useState({
        productCode: "",
        quantity: 0
    });
    const [discount, setDiscount] = useState({});
    const [bill, setBill] = useState({
        customerCode: "",
        employeeCode: "",
        discountCode: "",
        billCode: "",
        productBills: [],
        total: 0
    });
    const checkValidBill = (obj) => {
        if (obj.customerCode === "" || obj.employeeCode === "" || obj.discountCode === "" || obj.billCode === "" || obj.productBills.length <= 0) {
            return false;
        }
        return true;
    }
    const changeCustomerCode = (newCode) => {
        setBill(prevState => {
            return { ...prevState, customerCode: newCode };
        });
    };
    const changeEmployeeCode = (newCode) => {
        setBill(prevState => {
            return { ...prevState, employeeCode: newCode };
        });
    };
    const changeDiscount = (newDiscount) => {
        setDiscount(newDiscount);
        changeDiscountCode(newDiscount.discountCode);
    };
    const changeDiscountCode = (newCode) => {
        setBill(prevState => {
            return { ...prevState, discountCode: newCode };
        });
    };
    const handleChangeProductBill = (event) => {
        setProductBill(prevState => {
            return { ...prevState, [event.target.name]: event.target.value }
        });
    };
    const handlePrintInvoice = () => {
        let saveBill = { ...bill, total: (bill.total - discount.sale) }
        handleExportPdf();
        console.log(saveBill)
        addBill(saveBill);
    };
    const validateProduct = () => {
        const errors = {};
        if (!productBill.productCode) {
            errors.productCode = "Bắt buộc nhập";
        }
        if (!productBill.quantity) {
            errors.password = "Bắt buộc nhập";
        } else if (productBill.quantity < 1) {
            errors.quantity = "Số lượng phải lớn hơn 0"
        }
        return errors;
    };
    const setBillCode = async () => {
        const temp = await PaymentService.getBillCode();
        setBill(prevState => {
            return { ...prevState, billCode: temp.data }
        });
    };
    const addBill = async () => {
        const temp = await PaymentService.addBill(bill);
        setBill(prevState => {
            return {
                ...prevState,
                customerCode: "",
                discountCode: "",
                productBills: [],
                total: 0
            }
        });
        setBillCode();
    };
    const handleSubmitImport = async (values) => {
        setProductBill({
            productCode: "",
            quantity: 0
        });
        const temp = await PaymentService.importProduct(values);
        console.log(temp);
        if (temp.status === 200) {
            setBill(prevState => {
                return {
                    ...prevState,
                    productBills: [...prevState.productBills, (temp.data)], total: prevState.total + (temp.data.quantity * temp.data.price)
                };
            });
            console.log(bill);
        } else {
            let errLog = "";
            if (temp.status === 204) {
                errLog = 'Số lượng còn lại của sản phẩm không đủ!';
            }
            if (temp.status === 404) {
                errLog = 'Không tìm thấy sản phẩm này!';
            }
            if (temp.status === 400) {
                errLog = 'Số lượng cần lớn hơn 0!';
            }
            toast.error(errLog, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        };
    };
    useEffect(() => {
        if (bill.billCode === "") {
            setBillCode();
        };
        // nhận employee code từ user
        changeEmployeeCode("E1");
    }, []);
    return (
        <>
            <Formik initialValues={productBill}
                validate={validateProduct}
                enableReinitialize={true}
                onSubmit={values => handleSubmitImport(values)}>
                {({ errors }) => (
                    <Form className=" row">
                        <div className="col-xl-5 col-lg-6 col-md-10 card p-xl-4 p-sm-2 p-xs-2 mx-auto shadow">
                            {/* <div className="mx-auto shadow"> */}
                            <div className="row">
                                <span className="fw-medium col-auto">Mã hóa đơn</span>
                                <span className="col-auto">{bill.billCode}</span>
                            </div>
                            <div className="row">
                                <label htmlFor="customer-code" className="fw-medium col-form-label col-auto">Mã khách
                                    hàng</label>
                                <div className="col-auto">
                                    <input type="text" className="form-control" id="customer-code" value={bill.customerCode}
                                        disabled />
                                </div>
                                <div className="col-auto">
                                    <CustomerSearchModal handleSubmit={changeCustomerCode} />
                                </div>
                            </div>
                            <div className="row">
                                <span className="fw-medium col-auto">Ngày tháng năm</span>
                                <span className="col-auto">{new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now())}</span>
                            </div>
                            <div className="row">
                                <div className="col-auto row">
                                    <label htmlFor="product-code" className="fw-medium col-form-label col-auto">Mã
                                        hàng</label>
                                    <div className="col-auto">
                                        <input type="text" name="productCode" value={productBill.productCode}
                                            className="form-control" id="productCode"
                                            onChange={(e) => handleChangeProductBill(e)} />
                                        <p className="text-danger error-message">{errors.productCode}</p>
                                    </div>
                                </div>
                                <div className="col-auto row">
                                    <label htmlFor="quantity" className="fw-medium col-form-label col-auto">Số lượng</label>
                                    <div className="col-auto">
                                        <input type="number" name="quantity" value={productBill.quantity}
                                            className="form-control" id="quantity"
                                            onChange={(e) => handleChangeProductBill(e)} />
                                        <p className="text-danger error-message">{errors.quantity}</p>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-success">Nhập</button>
                                </div>
                            </div>
                            <div>
                                <table className="table table-striped table-hover table-responsive">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã hàng</th>
                                            <th>Tên hàng</th>
                                            <th>Số lượng</th>
                                            <th>Size</th>
                                            <th>Đơn giá</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bill.productBills && bill.productBills.map((value, index) => (
                                            <tr key={value.productCode}>
                                                <td>{index + 1}</td>
                                                <td>{value.productCode}</td>
                                                <td>{value.name}</td>
                                                <td>{value.quantity}</td>
                                                <td>{value.size.size}</td>
                                                <td>đ{value.price}</td>
                                                <td>đ{value.price * value.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <DiscounrSelectModal bill={bill} handleSubmit={changeDiscount} />
                            </div>
                            <div className="row">
                                <span className="fw-medium col-auto">Tổng</span>
                                <span className="col-auto">đ{bill.total}</span>
                                <span className="fw-medium col-auto">Giảm giá</span>
                                <span className="col-auto">đ{discount.sale ? discount.sale : 0}</span>
                                <span className="fw-medium col-auto">Thành tiền</span>
                                <span className="col-auto">đ{bill.total - (discount.sale ? discount.sale : 0)}</span>
                                <span className="fw-medium col-auto">Điểm</span>
                                <span className="col-auto">+{discount.rewardPoint ? discount.rewardPoint : 0}</span>
                            </div>
                            <div className="row p-2 d-flex justify-content-center">
                                <button type="button" className="btn col-auto">QR Code</button>
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="col-auto">
                                            <button type="button" disabled={!checkValidBill(bill)} className="btn btn-primary btn-block" onClick={() => handlePrintInvoice()}>In hóa đơn</button>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-secondary btn-block">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {checkValidBill(bill) ? <PdfDoc bill={bill} discount={discount} /> : ""} */}
                        </div>
                    </Form>
                )}
            </Formik >
            <ToastContainer />
        </>
    );
}

export default Payment;