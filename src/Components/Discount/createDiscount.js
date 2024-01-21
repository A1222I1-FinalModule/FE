import style from '../Discount/createDiscount.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import * as discounts from '../../Services/API/Discount/discount';
import { toast } from 'react-hot-toast';
import moment from 'moment';
export function CreateDiscount() {
    const [discountCode, setDiscountCode] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const initDiscount = {
        discountCode: '',
        name: '',
        sale: '',
        rewardPoint: '',
        condition: '',
        customerType: {
            id: 2,
        },
        isDeleted: true,
    };
    const validateDiscount = {
        discountCode: Yup.string()
            .required('Không Được Bỏ Trống')
            .matches(/^C[a-zA-Z0-9]{2,9}$/, 'Không Đúng Định Dạng C0001'),
        name: Yup.string()
            .required('Không Được Bỏ Trống')
            .matches(/^[A-Z][a-zA-Z0-9 /]{2,29}$/, 'Không Đúng Đinh Dạng Sale 5/5'),
        sale: Yup.number()
            .typeError('Không Nhận Ký Tự')
            .required('Không Được Bỏ Trống')
            .min(5, 'Giảm ít nhất là 5')
            .max(100, 'Giảm nhiều nhất là 100'),
        rewardPoint: Yup.number()
            .typeError('Không Nhận Ký Tự')
            .required('Không Được Bỏ Trống')
            .min(10, 'Điểm nhận ít nhất 10')
            .max(1000, 'Điểm nhận nhiều nhất 1000'),
        condition: Yup.number()
            .typeError('Không Nhận Ký Tự')
            .required('Không Được Bỏ Trống')
            .min(1000, 'Điều kiện ít nhất 1000')
            .max(100000000, 'Điều kiện nhiều nhất 100,000,000'),
        beginDate: Yup.date()
            .required('Không Được Bỏ Trống')
            .test('is-greater', 'Ngày Bắt Đầu Phải Trước Ngày Kết Thúc', function (value) {
                const { endDate } = this.parent;
                return endDate && value && new Date(value) <= new Date(endDate);
            }),
        endDate: Yup.date()
            .required('Không Được Bỏ Trống')
            .test('is-greater', 'Ngày Kết Thúc Phải Sau Ngày Bắt Đầu', function (value) {
                const { beginDate } = this.parent;
                return beginDate && value && new Date(value) >= new Date(beginDate);
            }),
    };
    const formatDate = (dateStr) => {
        if (dateStr) {
            const [year, month, day] = dateStr.split('-');
            return `${day}-${month}-${year}`;
        }
        return '';
    };
    const checkDiscountCode = async () => {
        setDiscountCode(await discounts.listDiscountCode());
        console.log('discountCode', discountCode);
    };
    const handleSubmit = async (values) => {
        try {
            const formattedValues = {
                ...values,
                delete: true,
                beginDate: formatDate(values.beginDate),
                endDate: formatDate(values.endDate),
            };

            await discounts.addDiscount(formattedValues);
            navigate('/admin/listDiscount');
            toast.success('Create Success');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('loi tao');
                const errorMessage = error.response.data.message;
                setError('Code Đã Tồn Tại');
            } else {
                console.error(error);
            }
        }
    };
    return (
        <div className="page-container">
            <div className={style['container-main']}>
                <h1 className={style['font']}>Mã Giảm Giá</h1>
                {error && <div className={style['error-message']}>{error}</div>}
                <Formik
                    initialValues={initDiscount}
                    validationSchema={Yup.object().shape(validateDiscount)}
                    onSubmit={(value) => {
                        handleSubmit(value);
                        toast.success('Create Success');
                    }}
                >
                    <Form>
                        <div className={style['form-row']}>
                            <div>
                                <span className={style['label']}>Loại</span>
                                <div className="col-sm-10" style={{ width: '240px' }}>
                                    <Field
                                        as="select"
                                        name="customerType.id"
                                        className="form-select"
                                        style={{ height: '44px' }}
                                    >
                                        <option value={1} className={style['option']}>
                                            Regular
                                        </option>
                                        <option value={2} className={style['option']}>
                                            Vip
                                        </option>
                                        <option value={3} className={style['option']}>
                                            Normal
                                        </option>
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Code <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field
                                    className={` ${style['form-control']}`}
                                    type="text"
                                    name="discountCode"
                                    placeholder="C001"
                                />
                                <ErrorMessage
                                    name="discountCode"
                                    component="span"
                                    className={style['form-err']}
                                ></ErrorMessage>
                            </div>
                        </div>
                        <div className={style['form-row']}>
                            <div>
                                <span className={style['label']}>
                                    Tên Giám Giá <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field
                                    className={` ${style['form-control']}`}
                                    type="text"
                                    name="name"
                                    placeholder="Sale 2/2"
                                />
                                <ErrorMessage name="name" component="span" className={style['form-err']}></ErrorMessage>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Giảm (%) <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field
                                    className={` ${style['form-control']}`}
                                    type="text"
                                    name="sale"
                                    placeholder="20"
                                />
                                <ErrorMessage name="sale" component="span" className={style['form-err']}></ErrorMessage>
                            </div>
                        </div>
                        <div className={style['form-row']}>
                            <div>
                                <span className={style['label']}>
                                    Điểm Nhận <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field
                                    className={` ${style['form-control']}`}
                                    type="text"
                                    name="rewardPoint"
                                    placeholder="350"
                                />
                                <ErrorMessage
                                    name="rewardPoint"
                                    component="span"
                                    className={style['form-err']}
                                ></ErrorMessage>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Điều Kiện <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field
                                    className={` ${style['form-control']}`}
                                    type="text"
                                    name="condition"
                                    placeholder="500.000"
                                />
                                <ErrorMessage
                                    name="condition"
                                    component="span"
                                    className={style['form-err']}
                                ></ErrorMessage>
                            </div>
                        </div>
                        <div className={style['form-row']}>
                            <div>
                                <span className={style['label']}>
                                    Ngày Bắt Đầu <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field className={` ${style['form-control']}`} name="beginDate" type="date" />
                                <ErrorMessage
                                    name="beginDate"
                                    component="span"
                                    className={style['form-err']}
                                ></ErrorMessage>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Ngày Kết Thúc <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field className={` ${style['form-control']}`} name="endDate" type="date" />
                                <ErrorMessage
                                    name="endDate"
                                    component="span"
                                    className={style['form-err']}
                                ></ErrorMessage>
                            </div>
                        </div>
                        <div className={`${style.buttons} form-row`}>
                            <button
                                type="submit"
                                className="btn btn-success"
                                style={{
                                    padding: '10px 20px',
                                    margin: '0 5px',
                                }}
                                onClick={() => navigate('/listDiscount')}
                            >
                                Thoát
                            </button>
                            <button
                                type="submit"
                                class="btn btn-danger"
                                style={{
                                    padding: '10px 20px',
                                    margin: '0 5px',
                                }}
                            >
                                Tạo
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
