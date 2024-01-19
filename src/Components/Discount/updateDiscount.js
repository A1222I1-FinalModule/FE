import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as discounts from '../../Services/API/Discount/discount';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from '../Discount/createDiscount.module.css';
import { toast } from 'react-hot-toast';
export function UpdateDiscount() {
    let { id } = useParams();
    const [discount, setDiscount] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        getFindById();
    }, [id]);
    const getFindById = async () => {
        let temp = await discounts.getFindByIdDiscount(id);
        console.log(temp);
        setDiscount(temp);
    };
    const validateDiscount = {
        name: Yup.string()
            .required('Not Empty')
            .matches(/^[A-Z][a-zA-Z0-9 /]{2,29}$/, 'Not format'),
        sale: Yup.number()
            .typeError('Incorrect format')
            .required('Not Empty')
            .min(5, 'Sale must be at least 5')
            .max(100, 'Sale must be at most 100'),
        rewardPoint: Yup.number()
            .typeError('Incorrect format')
            .required('Not Empty')
            .min(10, 'Reward Point must be at least 10')
            .max(1000, 'Reward Point must be at most 1000'),
        condition: Yup.number()
            .typeError('Incorrect format')
            .required('Not Empty')
            .min(1000, 'Condition must be at least 1000')
            .max(100000000, 'Condition must be at most 100,000,000'),
        beginDate: Yup.date()
            .required('Not Empty')
            .test('is-greater', 'The start date must be earlier than the end date', function (value) {
                const { endDate } = this.parent;
                return endDate && value && new Date(value) >= new Date(endDate);
            }),
        endDate: Yup.date()
            .required('Not Empty')
            .test('is-greater', 'End Date should be later than Start Date', function (value) {
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

    const handleSubmit = async (id, values) => {
        const formattedValues = {
            ...values,
            delete: true,
            beginDate: formatDate(values.beginDate),
            endDate: formatDate(values.endDate),
        };
        console.log('TOi oke');
        console.log(id, formattedValues);
        await discounts.updateDiscount(id, formattedValues);
        navigate('/listDiscount');
        toast.success('Update Success');
    };

    if (!discount) {
        return null;
    }
    const initDiscount = {
        discountCode: discount.discountCode,
        name: discount.name,
        rewardPoint: discount.rewardPoint,
        condition: discount.condition,
        sale: discount.sale,
        beginDate: formatDate(discount.beginDate),
        endDate: formatDate(discount.beginDate),
        customerType: {
            id: discount.customerType.id,
        },
    };
    return (
        <div className="page-container">
            <div className={style['container-main']}>
                <h1 style={{ fontFamily: 'Verdana' }}>Discount</h1>
                <Formik
                    initialValues={initDiscount}
                    validationSchema={Yup.object().shape(validateDiscount)}
                    onSubmit={(value) => {
                        handleSubmit(discount.discountCode, value);
                        toast.success('Update success');
                    }}
                >
                    <Form>
                        <div className={style['form-row']}>
                            <div>
                                <span className={style['label']}>Type</span>
                                <div className="col-sm-10" style={{ width: '240px' }}>
                                    <Field
                                        as="select"
                                        name="customerType.id"
                                        className="form-select"
                                        style={{ height: '44px' }}
                                    >
                                        <option value={1}>Regular</option>
                                        <option value={2}>Vip</option>
                                        <option value={3}>Normal</option>
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Discount Code <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field
                                    className={` ${style['form-control']}`}
                                    type="text"
                                    name="discountCode"
                                    placeholder="S001"
                                    readOnly
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
                                    Name Discount <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field className={` ${style['form-control']}`} type="text" name="name" placeholder="Sale 2/2" />
                                <ErrorMessage name="name" component="span" className={style['form-err']}></ErrorMessage>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Sale (%) <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field className={` ${style['form-control']}`} type="text" name="sale" placeholder="20" />
                                <ErrorMessage name="sale" component="span" className={style['form-err']}></ErrorMessage>
                            </div>
                        </div>
                        <div className={style['form-row']}>
                            <div>
                                <span className={style['label']}>
                                    Reward Point <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field className={` ${style['form-control']}`} type="text" name="rewardPoint" placeholder="350" />
                                <ErrorMessage
                                    name="rewardPoint"
                                    component="span"
                                    className={style['form-err']}
                                ></ErrorMessage>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    Condition <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field className={` ${style['form-control']}`} type="text" name="condition" placeholder="500.000" />
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
                                    Start Date <span className={` ${style['required-field']}`}>*</span>
                                </span>
                                <Field className={` ${style['form-control']}`} name="beginDate" type="date" />
                                <ErrorMessage
                                    name="endDate"
                                    component="span"
                                    className={style['form-err']}
                                ></ErrorMessage>
                            </div>
                            <div>
                                <span className={style['label']}>
                                    End Date <span className={` ${style['required-field']}`}>*</span>
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
                            <button type="submit" className="btn btn-success" onClick={() => navigate('/listDiscount')}>
                                Cancel
                            </button>
                            <button type="submit" class="btn btn-danger">
                                Update
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
