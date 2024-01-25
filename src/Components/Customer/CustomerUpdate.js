import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { formatDate } from '../../utils/helpers';
import * as customerService from '../../Services/customerService';
import Button from '../Button';

function CustomerUpdate() {
    const params = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({});
    const [customerType, setCustomerType] = useState([]);
    const [errorPhone, setErrorPhone] = useState('');
    const [errorMail, setErrorMail] = useState('');

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

    const handleSubmit = async (value, { setSubmitting, setFieldError }) => {
        try {
            const formFormat = {
                ...value,
                customerType: JSON.parse(value.customerType),
                gender: parseInt(value.gender),
                dateOfBirth: formatDate(value.dateOfBirth),
            };
            await customerService.updateCustomer(params.id, formFormat);
            navigate('/');
            setSubmitting(false);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = error.response.data;

            if (errorMessage.length === 1) {
                if (errorMessage[0] === 'Email đã tồn tại.') {
                    setErrorMail(errorMessage[0]);
                    setFieldError('email', errorMessage[0]);
                } else if (errorMessage[0] === 'Số điện thoại đã tồn tại.') {
                    setErrorPhone(errorMessage[0]);
                    setFieldError('phone', errorMessage[0]);
                }
            } else {
                setErrorPhone(errorMessage[0]);
                setErrorMail(errorMessage[1]);
                setFieldError('phone', errorMessage[0]);
                setFieldError('email', errorMessage[1]);
            }

            setFieldError('general', errorMessage);
        }
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
                        gender: customer.gender ? '1' : '0',
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
                        dateOfBirth: Yup.date()
                            .max(new Date(), 'Ngày sinh không được lớn hơn ngày hiện tại')
                            .required('Không được để trống'),
                        phone: Yup.string()
                            .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ')
                            .required('Không được để trống'),
                        email: Yup.string().email('Nhập email không hợp lệ').required('Không được để trống'),
                    })}
                >
                    {(formikProps) => (
                        <Form class="">
                            <div class="mb-3 spacing">
                                <label htmlFor="id" class="form-label">
                                    Mã khách hàng
                                </label>
                                <Field type="text" class="form-control user-select-none pe-none" name="id" />
                            </div>
                            <div class="mb-3 spacing">
                                <label htmlFor="name" class="form-label">
                                    Họ tên
                                </label>
                                <Field type="text" class="form-control" name="name" />
                                <ErrorMessage
                                    className="form-text text-danger"
                                    name="name"
                                    component="span"
                                ></ErrorMessage>
                            </div>
                            <div class="mb-3 spacing">
                                <label htmlFor="dateOfBirth" class="form-label">
                                    Ngày sinh
                                </label>
                                <Field type="date" class="form-control" name="dateOfBirth" />
                                <ErrorMessage
                                    className="form-text text-danger"
                                    name="dateOfBirth"
                                    component="span"
                                ></ErrorMessage>
                            </div>
                            <div class="mb-3 spacing">
                                <label htmlFor="address" class="form-label">
                                    Địa chỉ
                                </label>
                                <Field type="text" class="form-control" name="address" />
                                <ErrorMessage
                                    className="form-text text-danger"
                                    name="address"
                                    component="span"
                                ></ErrorMessage>
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
                                <Field
                                    type="text"
                                    class="form-control"
                                    name="phone"
                                    onBlur={(e) => {
                                        Yup.string()
                                            .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ')
                                            .validate(formikProps.values.phone)
                                            .catch((err) => formikProps.setFieldError('phone', err.message));
                                    }}
                                />
                                <ErrorMessage
                                    name="phone"
                                    render={(msg) => (
                                        <>
                                            <span className="form-text text-danger">
                                                {(msg && msg) || (errorPhone && errorPhone)}
                                            </span>
                                        </>
                                    )}
                                />
                            </div>
                            <div class="mb-3 spacing">
                                <label htmlFor="email" class="form-label">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    onBlur={(e) => {
                                        Yup.string()
                                            .email('Nhập email không hợp lệ')
                                            .required('Không được để trống')
                                            .validate(formikProps.values.email)
                                            .catch((err) => formikProps.setFieldError('phone', err.message));
                                    }}
                                />
                                <ErrorMessage
                                    name="email"
                                    render={(msg) => (
                                        <>
                                            <span className="form-text text-danger">
                                                {(msg && msg) || (errorMail && errorMail)}
                                            </span>
                                        </>
                                    )}
                                />
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
                    )}
                </Formik>
            ) : (
                <div>Sai id</div>
            )}
        </div>
    );
}

export default CustomerUpdate;
