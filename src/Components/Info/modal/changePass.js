import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../Assets/Styles/Login/login.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { changePassword } from '../../../Services/API/authService';
import { toast, ToastContainer } from "react-toastify";
import { Button } from 'antd';
const ChangePass = (props) => {
    const [loadings, setLoadings] = useState([]);
    const defaultInput = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    }
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
    }
    const closedLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
        });
    }
    const validatePassword = {
        oldPassword: Yup.string()
            .required("Hãy Nhập Thông Tin Đầy Đủ")
            .matches(/\w/, "Lỗi Chứa Kí Tự Đăc Biệt"),
        newPassword: Yup.string().optional().notOneOf([Yup.ref("oldPassword")], "Mật Khẩu Mới Trùng Với Mật Khẩu Hiện Tại")
            .required("Hãy Nhập Thông Tin Đầy Đủ")
            .matches(/\w/, "Lỗi Chứa Kí Tự Đăc Biệt"),
        confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], "Mật Khẩu Mới Không Chính Xác")
            .required('Hãy Nhập Thông Tin Đầy Đủ')
            .matches(/\w/, "Lỗi Chứa Kí Tự Đăc Biệt"),


    };
    const handleSubmit = async (value, setFieldError = () => { }) => {
        enterLoading(1);
        await changePassword(value).then(() => {
            closedLoading(1);
            toast.success(' Thay đổi mật khẩu thành công !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            props.onHide();
        }).catch((err) => {
            if (err.response) {
                setFieldError("oldPassword", "Mật Khẩu hiện Tại Không Chính Xác")
                closedLoading(1);
            }


        });
    }
    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body style={{ padding: '0' }}>
                    <FontAwesomeIcon icon={faXmark} className={styles['icon-closed']} onClick={props.onHide} />
                    <Formik
                        initialValues={defaultInput}
                        validationSchema={Yup.object().shape(validatePassword)}
                        onSubmit={(value, { setFieldError }) => {
                            handleSubmit(value, setFieldError)
                        }}
                    >
                        <Form id='formChange'>
                            <div className={styles['d-flex']}>
                                <div className={styles['change-pass-container'] + " col-10"}>
                                    <h2 className="text-center mb-4 mt-4">Thay Đổi Mật Khẩu</h2>
                                    <div className={styles['form-group']}>
                                        <label for="currentPassword">Mật Khẩu Hiện Tại</label>
                                        <Field
                                            type="password"
                                            className={`${styles['login-input']} form-control form-control-lg `}
                                            name="oldPassword"
                                        />
                                        <div className={styles['error']}>
                                            <ErrorMessage className={styles['error-message']} name="oldPassword"
                                                component="span"
                                            />

                                        </div>
                                    </div>
                                    <div className={styles['form-group']}>
                                        <label for="newPassword">Mật Khẩu Mới</label>
                                        <Field
                                            type="password"
                                            className={`${styles['login-input']} form-control form-control-lg `}
                                            name="newPassword"
                                        />
                                        <div className={styles['error']}>
                                            <ErrorMessage className={styles['error-message']} name="newPassword"
                                                component="span"
                                            />

                                        </div>
                                    </div>
                                    <div className={styles['form-group']}>
                                        <label for="confirmPassword">Xác Nhận Mật Khẩu Mới</label>
                                        <Field
                                            type="password"
                                            className={`${styles['login-input']} form-control form-control-lg `}
                                            name="confirmPassword"
                                        />
                                        <div className={styles['error']}>
                                            <ErrorMessage className={styles['error-message']} name="confirmPassword"
                                                component="span"
                                            />

                                        </div>
                                    </div>
                                    <div className='text-center'>

                                        <Button
                                            type="primary"
                                            htmlType='submit'
                                            loading={loadings[1]}
                                            className='my-4'
                                        >
                                            Thay Đổi Mật Khẩu
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </>
    );
};
export default ChangePass;