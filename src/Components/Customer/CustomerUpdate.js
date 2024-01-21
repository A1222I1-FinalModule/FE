import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import * as customerService from '../../Services/customerService';

function CustomerUpdate() {
    const params = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.detailCustomer(params.id);
            console.log("toi da vao", result.data);
            setCustomer(result);
        };
        fetchApi();
    }, [params.id]);

    const handleSubmit = async (value, { setSubmitting }) => {
        await customerService.updateCustomer(params.id, value);
        navigate("/");
        setSubmitting(false)
    };

    const formatDate = (dateStr) => {
        if (dateStr) {
            const [year, month, day] = dateStr.split("-");
            return `${day}-${month}-${year}`;
        }
        return "";
    };


    return (
        <div className="container">
            <h1 class="mt-4">Thông tin khách hàng</h1>

            <Formik
                initialValues={{
                    id: customer.id,
                    name: customer.name,
                    dateOfBirth: formatDate(customer.dateOfBirth),
                    address: customer.address,
                    gender: customer.gender,
                    phone: customer.phone,
                    email: customer.email,
                    point: customer.point,
                }}
                onSubmit={handleSubmit}
            >
                <Form class="">
                    <div class="mb-3">
                        <label htmlFor="id" class="form-label">
                            Mã khách hàng
                        </label>
                        <Field type="text" class="form-control" name="id" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">
                            Họ tên
                        </label>
                        <Field type="text" class="form-control" name="name" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="dateOfBirth" class="form-label">
                            Ngày sinh
                        </label>
                        <Field type="date" class="form-control" name="dateOfBirth" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="address" class="form-label">
                            Địa chỉ
                        </label>
                        <Field type="text" class="form-control" name="address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">
                            Giới tính
                        </label>
                        <div className="d-flex align-items-center">
                            <div className="form-check d-flex align-items-center me-2">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value={true}
                                    checked={customer.gender === true}
                                />
                                <label className="form-check-label" htmlFor="male">
                                    Nam
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value={false}
                                    checked={customer.gender === false}
                                />
                                <label className="form-check-label" htmlFor="female">
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="phone" class="form-label">
                            Số điện thoại
                        </label>
                        <Field type="text" class="form-control" name="phone" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">
                            Email
                        </label>
                        <Field type="email" class="form-control" name="email" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="" class="form-label">
                            Điểm
                        </label>
                        <Field type="text" class="form-control" name="point" />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Sửa
                    </button>
                    {/* <button type="submit" class="btn btn-secondary">
                        Hủy
                    </button> */}
                </Form>
            </Formik>
        </div>
    );
}

export default CustomerUpdate;
