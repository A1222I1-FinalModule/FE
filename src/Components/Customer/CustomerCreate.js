import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { formatDate } from '../../utils/helpers';
import * as customerService from '../../Services/customerService';
import Button from '../Button';

function CustomerCreate() {
    const navigate = useNavigate();

    const handleSubmit = async (value, { setSubmitting }) => {
        const formFormat = {
            ...value,
            gender: parseInt(value.gender),
            dateOfBirth: formatDate(value.dateOfBirth),
        };

        await customerService.createCustomer(formFormat);
        navigate('/');
        setSubmitting(false);
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
                    </div>
                    <div class="mb-3 spacing">
                        <label for="address" class="form-label">
                            Địa chỉ
                        </label>
                        <Field type="text" class="form-control" name="address" />
                        <ErrorMessage className="form-text text-danger" name="address" component="span"></ErrorMessage>
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
                        <Field type="text" class="form-control" name="phone" />
                        <ErrorMessage className="form-text text-danger" name="phone" component="span"></ErrorMessage>
                    </div>
                    <div class="mb-3 spacing">
                        <label for="email" class="form-label">
                            Email
                        </label>
                        <Field type="email" class="form-control" name="email" />
                        <ErrorMessage className="form-text text-danger" name="email" component="span"></ErrorMessage>
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
            </Formik>
        </div>
    );
}

export default CustomerCreate;
