import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { toast } from 'react-toastify';
import { formatDate } from '../../utils/helpers';
import * as customerService from '../../Services/customerService';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Customer.module.scss'


const cx = classNames.bind(styles)
function CustomerCreate() {
    const navigate = useNavigate();

    const [errorPhone, setErrorPhone] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [errorId, setErrorId] = useState('');

    const handleSubmit = async (value, { setSubmitting, setFieldError }) => {
        try {

            const formFormat = {
                ...value,
                gender: parseInt(value.gender),
                dateOfBirth: formatDate(value.dateOfBirth),
            };

            await customerService.createCustomer(formFormat);
            navigate('/admin/customer');
            toast.success('Thêm mới thành công');
            setSubmitting(false);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = error.response.data;

            let emailError, phoneError, idError;
            if (Array.isArray(errorMessage)) {
                errorMessage.forEach((errorItem) => {
                    switch (errorItem) {
                        case 'Email đã tồn tại':
                            emailError = errorItem;
                            setErrorMail(emailError);
                            setFieldError('email', emailError);
                            break;
                        case 'Số điện thoại đã tồn tại':
                            phoneError = errorItem;
                            setErrorPhone(phoneError);
                            setFieldError('phone', phoneError);
                            break;
                        case 'Id đã tồn tại':
                            idError = errorItem;
                            setErrorId(idError);
                            setFieldError('id', idError);
                            break;
                        default:
                            break;
                    }
                });

                setFieldError('general', errorMessage);
            };
        }
    }

    return (
        <div className="page-container">
            <div className={cx('container-main')}>
                <h1 className={cx('font')}>Thêm mới khách hàng</h1>

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
                            .matches(/^[a-zA-ZàáảãạâầấẩẫậăắằẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵĐđ][a-zA-Z\sàáảãạâầấẩẫậăắằẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵĐđ]*$/, 'Không được chứa ký tự đặc biệt')
                            .required('Không được để trống'),
                        address: Yup.string().required('Không được để trống'),
                        dateOfBirth: Yup.date()
                            .max(new Date(), 'Không được hơn ngày hiện tại')
                            .required('Không được để trống'),
                        phone: Yup.string().matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ').required('Không được để trống'),
                        email: Yup.string().email('Nhập email không hợp lệ').required('Không được để trống'),
                    })}
                >
                    {(formikProps) => <Form>
                        <div className={cx('form-row')}>
                            <div>
                                <span className={cx('label')}>
                                    Mã Khách Hàng <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field
                                    className={` ${cx('form-control')}`}
                                    type="text"
                                    name="id"
                                    placeholder="KH000"
                                    onBlur={(e) => {
                                        Yup.string()
                                            .validate(formikProps.values.id)
                                            .catch((err) => formikProps.setFieldError('id', err.message));
                                    }}
                                />
                                <ErrorMessage
                                    name="id"
                                    render={(msg) => (
                                        <>
                                            <span className={cx('form-err')}>
                                                {(msg && msg) || (errorId && errorId)}
                                            </span>
                                        </>
                                    )}
                                />
                            </div>
                            <div>
                                <span className={cx('label')}>
                                    Email <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field
                                    type="email"
                                    className={` ${cx('form-control')}`}
                                    name="email"
                                    placeholder="a@gmail.com"
                                    onBlur={(e) => {
                                        Yup.string()
                                            .validate(formikProps.values.email)
                                            .catch((err) => formikProps.setFieldError('email', err.message));
                                    }}
                                />
                                <ErrorMessage
                                    name="email"
                                    render={(msg) => (
                                        <>
                                            <span className={cx('form-err')}>
                                                {(msg && msg) || (errorMail && errorMail)}
                                            </span>
                                        </>
                                    )}
                                />
                            </div>
                        </div>
                        <div className={cx('form-row')}>
                            <div>
                                <span className={cx('label')}>
                                    Họ Và Tên <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field
                                    className={` ${cx('form-control')}`}
                                    type="text"
                                    name="name"
                                    placeholder="Nguyen Van A"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="span"
                                    className={cx('form-err')}
                                ></ErrorMessage>
                            </div>
                            <div>
                                <span className={cx('label')}>
                                    Số Điện Thoại <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field
                                    className={` ${cx('form-control')}`}
                                    type="text"
                                    name="phone"
                                    placeholder="0123456789"
                                    onBlur={(e) => {
                                        Yup.string()
                                            .required('Không được để trống')
                                            .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ')
                                            .validate(formikProps.values.phone)
                                            .catch((err) => formikProps.setFieldError('phone', err.message));
                                    }}
                                />
                                <ErrorMessage name="phone" render={(msg) => (
                                    <>
                                        <span className={cx('form-err')}>
                                            {(msg && msg) || (errorPhone && errorPhone)}
                                        </span>
                                    </>
                                )}></ErrorMessage>
                            </div>
                        </div>
                        <div className={cx('form-row')}>
                            <div>
                                <span className={cx('label')}>
                                    Giới Tính <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <div className="d-flex">
                                    <Field
                                        as="select"
                                        name="gender"
                                        className="form-select"
                                        style={{ height: '44px', fontSize: '15px' }}
                                    >
                                        <option value={0} className={cx('option')}>
                                            Nam
                                        </option>
                                        <option value={1} className={cx('option')}>
                                            Nữ
                                        </option>
                                    </Field>
                                </div>
                                <ErrorMessage name="sale" component="span" className={cx('form-err')}></ErrorMessage>
                            </div>

                            <div>
                                <span className={cx('label')}>
                                    Ngày Sinh <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field className={` ${cx('form-control')}`} name="dateOfBirth" type="date" style={{ height: '45px' }} />
                                <ErrorMessage
                                    name="dateOfBirth"
                                    component="span"
                                    className={cx('form-err')}
                                ></ErrorMessage>
                            </div>
                        </div>
                        <div className={cx('form-row')}>
                            <div>
                                <span className={cx('label')}>
                                    Địa Chỉ <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field
                                    className={` ${cx('form-control')}`}
                                    type="text"
                                    name="address"
                                />
                                <ErrorMessage name="address" component="span" className={cx('form-err')}></ErrorMessage>
                            </div>
                        </div>

                        <div className={cx(`buttons`)}>
                            <button
                                type="submit"
                                class="btn btn-success"
                                style={{
                                    padding: '10px 20px',
                                    margin: '0 5px',
                                }}
                            >
                                Tạo
                            </button>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                style={{
                                    padding: '10px 20px',
                                    margin: '0 5px',
                                }}
                                onClick={() => navigate('/admin/customer')}
                            >
                                Thoát
                            </button>
                        </div>
                    </Form>}
                </Formik>
            </div>
        </div >
    );
}


export default CustomerCreate;
