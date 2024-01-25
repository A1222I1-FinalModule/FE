import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { formatDate } from '../../utils/helpers';
import * as customerService from '../../Services/customerService';
import Button from '../Button';
import { useState } from 'react';

function CustomerCreate() {
    const navigate = useNavigate();

    const [errorPhone, setErrorPhone] = useState('');
    const [errorMail, setErrorMail] = useState('');

    const handleSubmit = async (value, { setSubmitting, setFieldError }) => {
        try {
            const formFormat = {
                ...value,
                gender: parseInt(value.gender),
                dateOfBirth: formatDate(value.dateOfBirth),
            };

            await customerService.createCustomer(formFormat);
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
                Thêm khách hàng mới
            </h1>

            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    dateOfBirth: '',
                    address: '',
                    gender: 0,
                    phone: '',
                    email: '',
                    point: 0,
                    customerType: {
                        id: 1,
                    },
                }}
                onSubmit={handleSubmit}
                validationSchema={Yup.object().shape({
                    id: Yup.string()
                        .matches(/^KH\d{3}$/, 'Phải theo mẫu KH000')
                        .required('Không được để trống'),
                    name: Yup.string()
                        .max(100, 'Không được quá 100 ký tự')
                        .matches(/^[^\W_]+$/, 'Không được chứa ký tự đặc biệt')
                        .required('Không được để trống'),
                    address: Yup.string().required('Không được để trống'),
                    dateOfBirth: Yup.date()
                        .max(new Date(), 'Ngày sinh không được lớn hơn ngày hiện tại')
                        .required('Không được để trống'),
                })}
            >
                {(formikProps) => (
                    <Form class="">
                        <div class="mb-3 spacing">
                            <label for="id" class="form-label">
                                Mã khách hàng
                            </label>
                            <Field type="text" class="form-control" name="id" />
                            <ErrorMessage className="form-text text-danger" name="id" component="span"></ErrorMessage>
                        </div>
                        <div class="mb-3 spacing">
                            <label for="name" class="form-label">
                                Họ tên
                            </label>
                            <Field type="text" class="form-control" name="name" />
                            <ErrorMessage className="form-text text-danger" name="name" component="span"></ErrorMessage>
                        </div>
                        <div class="mb-3 spacing">
                            <label for="dateOfBirth" class="form-label">
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
                            <label for="address" class="form-label">
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
                            <label htmlFor="gender" class="form-label">
                                Giới tính
                            </label>
                            <div className="d-flex mt-2">
                                <div class="form-check d-flex me-4">
                                    <Field class="form-check-input me-2" type="radio" name="gender" value="0" />
                                    <label class="form-check-label" htmlFor="">
                                        Nam
                                    </label>
                                </div>
                                <div class="form-check d-flex">
                                    <Field class="form-check-input me-2" type="radio" name="gender" value="1" />
                                    <label class="form-check-label" htmlFor="">
                                        Nữ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 spacing">
                            <label for="phone" class="form-label">
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
                            <label for="email" class="form-label">
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

                        <div className="mt-4">
                            <Button type="submit" primary>
                                Thêm
                            </Button>
                            <Button to="/" outline>
                                Hủy
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CustomerCreate;
