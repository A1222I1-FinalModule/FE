import React, { useEffect, useRef, useState } from 'react';
import CustomerSearchModal from "./CustomerSearchModal";
import DiscountSelectModal from "./DiscountSelectModal";
import { Formik, Form } from "formik";
import { getUser } from '../../Services/API/EmployeeService';
import * as PaymentService from "../../Services/API/Payment/PaymentService"
import "../../Assets/Styles/payment.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PdfDoc from './PdfDoc';
import QrScanner from './QrScanner';

function Payment() {
    let timer;
    const pdfExportComponent = useRef(null);
    const handleExportPdf = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.handleExportPdf();
        }
    };
    const [loading, setLoading] = useState(false);
    const [isScanOn, setIsScanOn] = useState(false);
    const [productBill, setProductBill] = useState({
        productCode: "",
        quantity: 1
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
        if (obj.customerCode === "" || obj.employeeCode === "" || obj.billCode === "" || obj.productBills.length <= 0) {
            return false;
        }
        return true;
    };
    const handleScan = (productCode) => {
        setProductBill({ productCode: productCode, quantity: 1 });
        setIsScanOn(false);
    };
    const getQuantityProductInBill = (code) => {
        let currentQuantity = 0;
        bill.productBills.forEach(productBill => {
            if (productBill.productCode === code) {
                currentQuantity = productBill.quantity;
                return;
            };
        });
        return currentQuantity;
    };
    const changeCustomerCode = (newCode) => {
        setBill(prevState => {
            return { ...prevState, customerCode: newCode };
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
        let saveBill = { ...bill, total: (bill.total - (discount.sale ? discount.sale : 0)) }
        addBill(saveBill);
    };
    const validateProduct = () => {
        const errors = {};
        if (!productBill.productCode) {
            errors.productCode = "Bắt buộc nhập";
        }
        if (!productBill.quantity) {
            errors.password = "Bắt buộc nhập";
        } else if (productBill.quantity <= 0) {
            errors.quantity = "SL phải lớn hơn 0"
        }
        return errors;
    };
    const debounce = (func, delay) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
    const setBillCode = async () => {
        const temp = await PaymentService.getBillCode();
        setBill(prevState => {
            return { ...prevState, billCode: temp.data }
        });
    };
    const getEmployeeCode = async () => {
        const employee = await getUser();
        setBill(prevState => {
            return { ...prevState, employeeCode: employee.id };
        });
    };
    const addBill = async (thisBill) => {
        setLoading(true);
        let temp = await PaymentService.addBill(thisBill);
        if (temp.status === 200) {
            handleExportPdf();
        };
        setLoading(false);
        handleCancel();
    };
    const handleCancel = () => {
        setBill(prevState => {
            return {
                ...prevState,
                customerCode: "",
                discountCode: "",
                productBills: [],
                total: 0
            }
        });
        setDiscount({});
        setBillCode();
    }
    const handleSubmitImport = async (values) => {
        setProductBill({
            productCode: "",
            quantity: 1
        });
        let temp = getQuantityProductInBill(values.productCode);
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
        getEmployeeCode();
    }, []);
    return (
        <div className='w-100'>
            <Formik initialValues={productBill}
                validate={validateProduct}
                enableReinitialize={true}
                onSubmit={values => handleSubmitImport(values)}>
                {({ errors }) => (
                    <Form className="my-auto d-flex justify-content-center align-items-center">
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
                                    <CustomerSearchModal handleSubmit={changeCustomerCode} chooseCode={bill.customerCode} />
                                </div>
                            </div>
                            <div className="row">
                                <span className="fw-medium col-auto normal-txt-payment">Ngày tháng năm</span>
                                <span className="col-auto normal-txt-payment">{new Intl.DateTimeFormat('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.now())}</span>
                            </div>
                            <div className="row">
                                <div className="col-12 row col-md ">
                                    <label htmlFor="product-code" className="fw-medium normal-txt-payment col-form-label col-auto">Mã
                                        hàng</label>
                                    <div className="col-auto">
                                        <input type="text" name="productCode" value={productBill.productCode}
                                            className="normal-txt-payment" id="productCode"
                                            onChange={(e) => handleChangeProductBill(e)} />
                                        <p className="text-danger error-message-payment">{errors.productCode}</p>
                                    </div>
                                </div>
                                <div className="col-md col-12 row">
                                    <label htmlFor="quantity" className="fw-medium normal-txt-payment col-form-label col-auto">Số lượng</label>
                                    <div className="col-auto">
                                        <input type="number" name="quantity" value={productBill.quantity}
                                            className="normal-txt-payment form-control" id="quantity"
                                            onChange={(e) => handleChangeProductBill(e)} />
                                        <p className="text-danger error-message-payment">{errors.quantity}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md ">
                                    <button type="submit" className="btn btn-success button-size-payment mx-auto">Nhập </button>
                                </div>
                            </div>
                            <div>
                                <table className="table table-striped table-hover normal-txt-payment table-responsive">
                                    <thead className='table-font-payment'>
                                        <tr>
                                            <th>STT</th>
                                            <th>Mã hàng</th>
                                            <th>Tên hàng</th>
                                            <th>SL</th>
                                            <th>Size</th>
                                            <th>Đơn giá</th>
                                            <th>Tổng</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-font-payment'>
                                        {bill.productBills && bill.productBills.map((value, index) => (
                                            <tr key={value.productCode} style={{ textAlign: 'center' }}>
                                                <td>{index + 1}</td>
                                                <td>{value.productCode}</td>
                                                <td className='col-md-6 col-sm-1 col-lg-12'>{value.name}</td>
                                                <td>{value.quantity}</td>
                                                <td>{value.size.size}</td>
                                                <td>{value.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                <td>{(value.price * value.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <DiscountSelectModal bill={bill} handleSubmit={changeDiscount} />
                            </div>
                            <div className="row">
                                <span className="fw-medium normal-txt-payment col-auto">Tổng</span>
                                <span className="col-auto normal-txt-payment">{bill.total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                <span className="fw-medium normal-txt-payment col-auto">Giảm giá</span>
                                <span className="col-auto normal-txt-payment">{(discount.sale ? discount.sale : 0).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                <span className="fw-medium normal-txt-payment col-auto">Thành tiền</span>
                                <span className="col-auto normal-txt-payment">{(bill.total - (discount.sale ? discount.sale : 0)).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                <span className="fw-medium normal-txt-payment col-auto">Điểm</span>
                                <span className="col-auto normal-txt-payment">+{discount.rewardPoint ? discount.rewardPoint : 0}</span>
                            </div>
                            <div className="row p-2 d-flex justify-content-center">
                                <button type="button" className="btn btn-default normal-txt-payment col-auto" onClick={() => setIsScanOn(prevState => (!prevState))}>Mã QR</button>
                                <div className="col-auto">
                                    <div className="row">
                                        <div className="col-auto">
                                            {loading ? (<button className="btn normal-txt-payment btn-primary btn-block" type="button" disabled>
                                                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                                <span role="status">Đang thực hiện</span>
                                            </button>) : <button type="button" disabled={!checkValidBill(bill)} className="btn normal-txt-payment btn-primary btn-block" onClick={() => handlePrintInvoice()}>In hóa đơn</button>
                                            }
                                        </div>
                                        <div className="col-auto">
                                            <button type="button" className="btn btn-danger normal-txt-payment" onClick={() => debounce(handleCancel, 1000)}>Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2 d-flex justify-content-center">
                                {isScanOn ? <QrScanner handleScan={handleScan} /> : ""}
                            </div>
                            {checkValidBill(bill) ? <PdfDoc bill={bill} discount={discount} ref={pdfExportComponent} /> : ""}
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </div >
    );
}

export default Payment;