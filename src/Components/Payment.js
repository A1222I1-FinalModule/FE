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
    // const pdfExportComponent = useRef(null);
    // const handleExportPdf = () => {
    //     if (pdfExportComponent.current) {
    //         pdfExportComponent.current.handleExportPdf();
    //     }
    // };
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
    const updateProductQuantity = (productCode, newQuantity) => {
        setBill(prevBill => {
            const updatedProductBills = prevBill.productBills.map(productBill => {
                if (productBill.productCode === productCode) {
                    return { ...productBill, quantity: newQuantity };
                }
                return productBill;
            });
            return { ...prevBill, productBills: updatedProductBills };
        });
    };
    const checkValidBill = (obj) => {
        if (obj.customerCode === "" || obj.employeeCode === "" || obj.discountCode === "" || obj.billCode === "" || obj.productBills.length <= 0) {
            return false;
        }
        return true;
    };
    const getQuantityProductInBill = (code) => {
        let currentQuantity = 0;
        bill.productBills.forEach(productBill => {
            if (productBill.productCode == code) {
                currentQuantity = productBill.quantity;
                return;
            };
        });
        return currentQuantity;
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
        // handleExportPdf();
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
        let temp = getQuantityProductInBill(values.productCode);
        console.log(temp);
        let result;
        if (temp === 0) {
            result = await PaymentService.importProduct(values);
        } else {
            let sendValue = { ...values, quantity: parseInt(values.quantity) + parseInt(temp) };
            result = await PaymentService.importProduct(sendValue);
        }
        if (result.status === 200) {
            if (temp === 0) {
                setBill(prevState => {
                    return {
                        ...prevState,
                        productBills: [...prevState.productBills, (result.data)], total: prevState.total + (result.data.quantity * result.data.price)
                    };
                });
            }
            else {
                updateProductQuantity(values.productCode, parseInt(values.quantity) + parseInt(temp));
            }
        } else {
            let errLog = "";
            if (result.status === 204) {
                errLog = 'Số lượng còn lại của sản phẩm không đủ!';
            }
            if (result.status === 404) {
                errLog = 'Không tìm thấy sản phẩm này!';
            }
            if (result.status === 400) {
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
        <div className='w-100'>
            <Formik initialValues={productBill}
                validate={validateProduct}
                enableReinitialize={true}
                onSubmit={values => handleSubmitImport(values)}>
                {({ errors }) => (
                    <Form className="row my-auto d-flex justify-content-center align-items-center">
                        <div className="col-xl-10 col-lg-8 col-md-10 card p-xl-4 p-sm-2 p-xs-2 shadow">
                            <div className="row d-flex justify-content-center">
                                <span className="fw-medium col-auto normal-txt-payment">Mã hóa đơn</span>
                                <span className="col normal-txt-payment">{bill.billCode}</span>
                            </div>
                            <div className="row">
                                <label htmlFor="customer-code" className="fw-medium col-form-label col-auto normal-txt-payment">Mã khách
                                    hàng</label>
                                <div className="col-auto">
                                    <input type="text" className=" normal-txt-payment" id="customer-code" value={bill.customerCode}
                                        disabled />
                                </div>
                                <div className="col">
                                    <CustomerSearchModal handleSubmit={changeCustomerCode} />
                                </div>
                            </div>
                            <div className="row">
                                <span className="fw-medium col-auto normal-txt-payment">Ngày tháng năm</span>
                                <span className="col-auto normal-txt-payment">{new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now())}</span>
                            </div>
                            <div className="row">
                                <div className="col row">
                                    <label htmlFor="product-code" className="fw-medium normal-txt-payment col-form-label col-auto">Mã
                                        hàng</label>
                                    <div className="col-auto">
                                        <input type="text" name="productCode" value={productBill.productCode}
                                            className="normal-txt-payment" id="productCode"
                                            onChange={(e) => handleChangeProductBill(e)} />
                                        <p className="text-danger error-message-payment">{errors.productCode}</p>
                                    </div>
                                </div>
                                <div className="col row">
                                    <label htmlFor="quantity" className="fw-medium normal-txt-payment col-form-label col-auto">Số lượng</label>
                                    <div className="col-auto">
                                        <input type="number" name="quantity" value={productBill.quantity}
                                            className="normal-txt-payment form-control" id="quantity"
                                            onChange={(e) => handleChangeProductBill(e)} />
                                        <p className="text-danger error-message-payment">{errors.quantity}</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn btn-success button-size-payment mx-auto">Nhập </button>
                                </div>
                            </div>
                            <div>
                                <table className="table table-striped table-hover normal-txt-payment table-responsive">
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
                                <span className="fw-medium normal-txt-payment col-auto">Tổng</span>
                                <span className="col-auto normal-txt-payment">đ{bill.total}</span>
                                <span className="fw-medium normal-txt-payment col-auto">Giảm giá</span>
                                <span className="col-auto normal-txt-payment">đ{discount.sale ? discount.sale : 0}</span>
                                <span className="fw-medium normal-txt-payment col-auto">Thành tiền</span>
                                <span className="col-auto normal-txt-payment">đ{bill.total - (discount.sale ? discount.sale : 0)}</span>
                                <span className="fw-medium normal-txt-payment col-auto">Điểm</span>
                                <span className="col-auto normal-txt-payment">+{discount.rewardPoint ? discount.rewardPoint : 0}</span>
                            </div>
                            <div className="row p-2 d-flex justify-content-center">
                                <button type="button" className="btn btn-default normal-txt-payment col-auto">QR Code</button>
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="col-auto">
                                            <button type="button" disabled={!checkValidBill(bill)} className="btn normal-txt-payment btn-primary btn-block" onClick={() => handlePrintInvoice()}>In hóa đơn</button>
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-danger normal-txt-payment">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {checkValidBill(bill) ? <PdfDoc bill={bill} discount={discount} ref={pdfExportComponent} /> : ""} */}
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </div>
    );
}
export default Payment();