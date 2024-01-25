import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../Button';
import { formatDate } from '../../utils/helpers';
import * as customerService from '../../Services/customerService';

function CustomerUpdate() {
    const params = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({});
    const [customerType, setCustomerType] = useState([]);

    useEffect(() => {
        const fecthApi = async () => {
            const res = await customerService.findAllCustomerType();
            setCustomerType(res);
        };

        fecthApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.detailCustomer(params.id);
            setCustomer(result);
        };
        fetchApi();
    }, [params.id]);

    const handleSubmit = async (value, { setSubmitting }) => {
        const formFormat = {
            ...value,
            customerType: JSON.parse(value.customerType),
            gender: parseInt(value.gender),
            dateOfBirth: formatDate(value.dateOfBirth),
        };
        await customerService.updateCustomer(params.id, formFormat);
        navigate('/');
        setSubmitting(false);
    };

    return (
        <div className="container">
            <h1 class="mt-4" style={{ fontSize: '30px' }}>
                Sửa thông tin khách hàng
            </h1>

            {Object.keys(customer).length > 0 && params.id === customer.id ? (
                <Formik
                    initialValues={{
                        id: customer.id,
                        name: customer.name,
                        dateOfBirth: formatDate(customer.dateOfBirth),
                        address: customer.address,
                        gender: customer.gender === true ? 1 : 0,
                        phone: customer.phone,
                        email: customer.email,
                        point: customer.point,
                        customerType: JSON.stringify(customer.customerType),
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object().shape({
                        id: Yup.string()
                            .matches(/^KH\d{3}$/, 'Phải theo mẫu KH000')
                            .required('Không được để trống'),
                        name: Yup.string().max(100, 'Không được quá 100 ký tự').required('Không được để trống'),
                        address: Yup.string().required('Không được để trống'),
                        phone: Yup.string()
                            .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ')
                            .required('Không được để trống'),
                        email: Yup.string().email().required('Không được để trống'),
                    })}
                >
                    <Form class="">
                        <div class="mb-3 spacing">
                            <label htmlFor="id" class="form-label">
                                Mã khách hàng
                            </label>
                            <Field type="text" class="form-control" name="id" />
                        </div>
                        <div class="mb-3 spacing">
                            <label htmlFor="name" class="form-label">
                                Họ tên
                            </label>
                            <Field type="text" class="form-control" name="name" />
                        </div>
                        <div class="mb-3 spacing">
                            <label htmlFor="dateOfBirth" class="form-label">
                                Ngày sinh
                            </label>
                            <Field type="date" class="form-control" name="dateOfBirth" />
                        </div>
                        <div class="mb-3 spacing">
                            <label htmlFor="address" class="form-label">
                                Địa chỉ
                            </label>
                            <Field type="text" class="form-control" name="address" />
                        </div>
                        <div className="mb-3 spacing">
                            <label htmlFor="gender" className="form-label">
                                Giới tính
                            </label>
                            <div className="d-flex mt-2">
                                <div className="form-check d-flex me-4">
                                    <Field
                                        className="form-check-input me-2"
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="0"
                                    />
                                    <label className="form-check-label" htmlFor="male">
                                        Nam
                                    </label>
                                </div>
                                <div className="form-check d-flex">
                                    <Field
                                        className="form-check-input me-2"
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="1"
                                    />
                                    <label className="form-check-label" htmlFor="female">
                                        Nữ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 spacing">
                            <label htmlFor="" className="form-label">
                                Kiểu
                            </label>
                            <Field id="customerType" name="customerType" className="form-select" as="select">
                                <option value="">Chọn</option>
                                {customerType.map((item) => (
                                    <option key={item.id} value={JSON.stringify(item)}>
                                        {item.typeName}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div class="mb-3 spacing">
                            <label htmlFor="phone" class="form-label">
                                Số điện thoại
                            </label>
                            <Field type="text" class="form-control" name="phone" />
                        </div>
                        <div class="mb-3 spacing">
                            <label htmlFor="email" class="form-label">
                                Email
                            </label>
                            <Field type="email" class="form-control" name="email" />
                        </div>
                        <div class="mb-3 spacing">
                            <label htmlFor="" class="form-label">
                                Điểm
                            </label>
                            <Field type="text" class="form-control" name="point" />
                        </div>
                        <div className="mt-4">
                            <Button type="submit" primary>
                                Sửa
                            </Button>
                            <Button type="submit" to="/" outline>
                                Hủy
                            </Button>
                        </div>
                    </Form>
                </Formik>
            ) : (
                <div>Sai id</div>
            )}
        </div>
    );
}

export default CustomerUpdate;
