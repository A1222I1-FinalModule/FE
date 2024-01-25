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
        beginDate:'',
        endDate:'',
        isDeleted: true,
    };
    const validateDiscount = {
        discountCode: Yup.string()
            .required('Không Được Bỏ Trống')
            .matches(/^C[a-zA-Z0-9]{2,9}$/, 'Không Đúng Định Dạng C0001'),
        name: Yup.string()
            .required('Không Được Bỏ Trống')
            .matches(/^[A-ZÀ-ỸĐ\s][a-zA-Z0-9À-ỹđĐ\s]{1,28}$/, 'Không Đúng Đinh Dạng Sale 5/5'),
        sale: Yup.number()
            .typeError('Không Nhận Ký Tự')
            .required('Không Được Bỏ Trống')
            .min(20000, 'Giảm ít nhất là 20000 VNĐ')
            .max(1000000, 'Giảm nhiều nhất là 1000000 VNĐ'),
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
    const handleSubmit = async (values) => {
        try {
            const formattedValues = {
                ...values,
                delete: true,
                beginDate: formatDate(values.beginDate),
                endDate: formatDate(values.endDate),
            };

            await discounts.addDiscount(formattedValues);
            navigate('/admin/discount');
            toast.success('Thêm Mới Thành Công');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Mã Giảm Giá    Đã Tồn Tại');
            } else {
                console.error(error);
            }
        }
    };
    return (
        <div className="page-container">
            <div className={style['container-main']}>
                <h1 className={style['font']} >Giảm Giá</h1>
                {error && <div className={style['error-message']}>{error}</div>}
                <Formik
                    initialValues={initDiscount}
                    validationSchema={Yup.object().shape(validateDiscount)}
                    onSubmit={(value) => {
                        handleSubmit(value);
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
                                        style={{ height: '44px', fontSize: '15px' }}
                                    >
                                        <option value={1} className={style['option']}>
                                            Regular
                                        </option>
                                        <option value={2} className={style['option']}>
                                            Vip
                                        </option>
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Mã Giảm Giá <span className={` ${style['required-field']}`}>*</span>
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
                                    Giảm (VNĐ) <span className={` ${style['required-field']}`}>*</span>
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
                                    Điều Kiện(VNĐ) <span className={` ${style['required-field']}`}>*</span>
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
                            <div style={{height:'2000px'}}>
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
                            <div style={{height:'2000px'}}>
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
                                onClick={() => navigate('/admin/discount')}
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
