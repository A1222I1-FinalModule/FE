import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as customerService from '../../Services/customerService';

function CustomerUpdate() {
    const params = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.detailCustomer(params.id);

            console.log(result);
        };
        fetchApi();
    }, [params.id]);

    const handleSubmit = async (value, { setSubmitting }) => {
        console.log(value);
    };

    return (
        <div className="container">
            <h1 class="mt-4">Thông tin khách hàng</h1>

            <Formik
                initialValues={{
                    id: customer.id,
                    name: customer.name,
                    date_of_birth: customer.date_of_birth,
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
                        <label for="id" class="form-label">
                            Mã khách hàng
                        </label>
                        <Field type="text" class="form-control" name="id" />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">
                            Họ tên
                        </label>
                        <Field type="text" class="form-control" name="name" />
                    </div>
                    <div class="mb-3">
                        <label for="date_of_birth" class="form-label">
                            Ngày sinh
                        </label>
                        <Field type="date" class="form-control" name="date_of_birth" />
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">
                            Địa chỉ
                        </label>
                        <Field type="text" class="form-control" name="address" />
                    </div>
                    <div className="mb-3">
                        <label for="gender" class="form-label">
                            Giới tính
                        </label>
                        <div className="d-flex align-items-center">
                            <div class="form-check d-flex align-items-center me-2">
                                <Field class="form-check-input" type="radio" name="gender" value="0" />
                                <label class="form-check-label" for="">
                                    Nam
                                </label>
                            </div>
                            <div class="form-check d-flex align-items-center">
                                <Field class="form-check-input" type="radio" name="gender" value="1" />
                                <label class="form-check-label" for="">
                                    Nữ
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">
                            Số điện thoại
                        </label>
                        <Field type="text" class="form-control" name="phone" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">
                            Email
                        </label>
                        <Field type="email" class="form-control" name="email" />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Điểm
                        </label>
                        <Field type="text" class="form-control" name="point" />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Sửa
                    </button>
                    <button type="submit" class="btn btn-secondary">
                        Hủy
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default CustomerUpdate;
