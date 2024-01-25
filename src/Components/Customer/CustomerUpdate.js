import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import classNames from 'classnames/bind';

import { formatDate } from '../../utils/helpers';
import * as customerService from '../../Services/API/customerService';
import styles from './Customer.module.scss'

const cx = classNames.bind(styles)

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

            console.log(formFormat)
            await customerService.updateCustomer(params.id, formFormat);
            navigate('/admin/customer');
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
        <div className="page-container">
            <div className={cx('container-main')}>
                <h1 className={cx('font')}>Cập nhật khách hàng</h1>

                {Object.keys(customer).length > 0 && <Formik
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
                        name: Yup.string()
                            .max(100, 'Không được quá 100 ký tự')
                            .matches(/^[a-zA-Z0-9\s]+$/, 'Không được chứa ký tự đặc biệt')
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

                                />
                                <ErrorMessage
                                    name="id"
                                    component="span"
                                    className={cx('form-err')}
                                ></ErrorMessage>
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
                                    Kiểu <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field id="customerType" name="customerType" className="form-select" as="select" style={{ height: '44px', fontSize: '15px' }}>
                                    <option value="">Chọn</option>
                                    {customerType.map((item) => (
                                        <option key={item.id} value={JSON.stringify(item)}>
                                            {item.typeName}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div>
                                <span className={cx('label')}>
                                    Điểm <span className={` ${cx('required-field')}`}>*</span>
                                </span>
                                <Field
                                    className={` ${cx('form-control')}`}
                                    type="text"
                                    name="point"
                                />
                                <ErrorMessage name="point" component="span" className={cx('form-err')}></ErrorMessage>
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
                                    placeholder="abcde"
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
                                Sửa
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
                </Formik>}
            </div>
        </div >
    );
}

export default CustomerUpdate;
