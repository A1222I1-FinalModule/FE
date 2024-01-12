import React, {useState} from 'react';
import CustomerSearchModal from "./CustomerSearchModal";
import {Formik, Form} from "formik";

function Payment() {
    const [productBill, setProductBill] = useState({
        productId: "",
        quantity: 0
    });
    const [bill, setBill] = useState({
        customerCode: "",
        employeeCode: "",
        discountCode: "",
        billCode: "",
        productBills: [],
        total: 0
    });
    const changeCustomerCode = (newCode) => {
        setBill(prevState => {
            return {...prevState, customerCode: newCode};
        });
        console.log(bill)
    };
    const handleChangeProductBill = (event) => {
        setProductBill(prevState => {
            return {...prevState, [event.target.name]: event.target.value}
        })
    }

    const validateProduct = () => {
        const errors = {};
        if (!productBill.productId) {
            errors.productId = "Required";
        }
        if (!productBill.quantity) {
            errors.password = "Required";
        } else if (productBill.quantity <= 0) {
            errors.quantity = "quantity must be more than 0"
        }
        return errors;
    }

    const handleSubmitImport = (values) => {
        console.log(values)
    }

    return (
        <Formik initialValues={productBill}
                validate={validateProduct}
                enableReinitialize={true}
                onSubmit={values => handleSubmitImport(values)}>
            {({errors}) => (
                <Form className="container-fluid row">
                    <div className="col-xl-5 col-lg-6 col-md-10 card p-xl-4 p-sm-2 p-xs-2 mx-auto shadow">
                        <div className="row">
                            <span className="fw-medium col-auto">Mã hóa đơn</span>
                            <span className="col-auto">HD100001</span>
                        </div>
                        <div className="row">
                            <label htmlFor="customer-code" className="fw-medium col-form-label col-auto">Mã khách
                                hàng</label>
                            <div className="col-auto">
                                <input type="text" className="form-control" id="customer-code" value={bill.customerCode}
                                       disabled/>
                            </div>
                            <div className="col-auto">
                                <CustomerSearchModal handleSubmit={changeCustomerCode}/>
                            </div>
                        </div>
                        <div className="row">
                            <span className="fw-medium col-auto">Ngày tháng năm</span>
                            <span className="col-auto">20/11/2023</span>
                        </div>
                        <div className="row">
                            <div className="col-auto row">
                                <label htmlFor="product-code" className="fw-medium col-form-label col-auto">Mã
                                    hàng</label>
                                <div className="col-auto">
                                    <input type="text" name="productId" value={productBill.productId}
                                           className="form-control" id="productId"
                                           onChange={(e) => handleChangeProductBill(e)}/>
                                    <p className="text-danger">{errors.productId}</p>
                                </div>
                            </div>
                            <div className="col-auto row">
                                <label htmlFor="quantity" className="fw-medium col-form-label col-auto">Số lượng</label>
                                <div className="col-auto">
                                    <input type="number" name="quantity" value={productBill.quantity}
                                           className="form-control" id="quantity"
                                           onChange={(e) => handleChangeProductBill(e)}/>
                                    <p className="text-danger">{errors.quantity}</p>
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
                                <tr>
                                    <td>01</td>
                                    <td>H001</td>
                                    <td>Quần bò</td>
                                    <td>01</td>
                                    <td>32</td>
                                    <td>200.000</td>
                                    <td>200.000</td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>H002</td>
                                    <td>Áo thun</td>
                                    <td>02</td>
                                    <td>34</td>
                                    <td>100.000</td>
                                    <td>200.000</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>H003</td>
                                    <td>Giày thể thao</td>
                                    <td>01</td>
                                    <td>36</td>
                                    <td>300.000</td>
                                    <td>300.000</td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>H004</td>
                                    <td>Áo khoác</td>
                                    <td>01</td>
                                    <td>38</td>
                                    <td>500.000</td>
                                    <td>500.000</td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>H005</td>
                                    <td>Quần tây</td>
                                    <td>01</td>
                                    <td>30</td>
                                    <td>400.000</td>
                                    <td>400.000</td>
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>H006</td>
                                    <td>Áo sơ mi</td>
                                    <td>01</td>
                                    <td>36</td>
                                    <td>250.000</td>
                                    <td>250.000</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <span className="fw-medium col-auto">Tổng</span>
                            <span className="col-auto">200.000</span>
                            <span className="fw-medium col-auto">Giảm giá</span>
                            <span className="col-auto">50.000</span>
                            <span className="fw-medium col-auto">Thành tiền</span>
                            <span className="col-auto">150.000</span>
                        </div>
                        <div className="row p-2 d-flex justify-content-center">
                            <button className="btn col-auto">
                                <img src="./resources/qr-code-png.png" className="mx-auto" height="60px"
                                     alt="QR Code Image"/>
                            </button>
                            <div className="col-auto">
                                <div className="row">
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-primary btn-block">In hóa đơn</button>
                                    </div>
                                    <div className="col-auto">
                                        <button type="button" className="btn btn-secondary btn-block">Hủy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default Payment;