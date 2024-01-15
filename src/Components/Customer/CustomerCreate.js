import { Formik, Form, Field } from 'formik';
import * as customerService from '../../Services/customerService';
import { useNavigate } from 'react-router-dom';

function CustomerCreate() {
    const navigate = useNavigate()

    const handleSubmit = async (value, { setSubmitting }) => {
        await customerService.createCustomer(value);
        navigate('/')
        setSubmitting(false);

    };

    return (
        <div className="container">
            <h1 class="mt-4">Thêm khách hàng mới</h1>

            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    dateOfBirth: '',
                    address: '',
                    gender: 0,
                    phone: '',
                    email: '',
                    customerType: {
                        id: 1,
                    },
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
                        <label for="dateOfBirth" class="form-label">
                            Ngày sinh
                        </label>
                        <Field type="date" class="form-control" name="dateOfBirth" />
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
                                <Field class="form-check-input" type="radio" name="gender" value={0} />
                                <label class="form-check-label" for="">
                                    Nam
                                </label>
                            </div>
                            <div class="form-check d-flex align-items-center">
                                <Field class="form-check-input" type="radio" name="gender" value={1} />
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

                    <button type="submit" class="btn btn-primary">
                        Thêm
                    </button>
                    <button type="submit" class="btn btn-secondary">
                        Hủy
                    </button>
                </Form>
            </Formik>
        </div>
    );
}

export default CustomerCreate;
