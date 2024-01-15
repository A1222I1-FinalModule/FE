import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Services/UserContext';
import { LoginAPI } from '../../Services/API/authService';
import styles from '../../Assets/Styles/Login/login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
    ERROR_FIELD_EMPTY,
    ERROR_FIELD_HAS_SPECIAL_CHARACTERS,
    ERROR_UNAUTHORIZED,
    REGEX_SPECIAL_CHARACTERS,
} from '../../Constants/LoginConstant/index';
const Login = (props) => {
    const user = useUser();
    const navigate = useNavigate();
    const defaultInput = {
        username: '',
        password: '',
    };
    const [inputs, setInputs] = useState(defaultInput);
    const [error, setError] = useState('');
    const updateValue = (key, value) => {
        setInputs({ ...inputs, [key]: value });
    };
    const resetError = () => setError('');
    const handleLogin = async () => {
        let isValid = true;
        if (REGEX_SPECIAL_CHARACTERS.test(inputs.username) || REGEX_SPECIAL_CHARACTERS.test(inputs.password)) {
            isValid = false;
            setError(ERROR_FIELD_HAS_SPECIAL_CHARACTERS);
        }
        if (inputs.username.length === 0 || inputs.password.length === 0) {
            isValid = false;
            setError(ERROR_FIELD_EMPTY);
        }
        if (isValid) {
            LoginAPI(inputs)
                .then(async (response) => {
                    return await user.setUser(response);
                })
                .then((roles) => {
                    if (roles.length > 0) {
                        for (let i = 0; i <= roles.length; i++) {
                            if (roles[i] === 'ROLE_ADMIN') {
                                navigate('/admin/dashboard');
                            } else {
                                navigate('/home');
                                window.location.reload(false);
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setError(ERROR_UNAUTHORIZED);
                });
        }
    };
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body style={{ padding: '0' }}>
                <FontAwesomeIcon icon={faXmark} className={styles['icon-closed']} onClick={props.onHide} />
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="card" style={{ borderRadius: '1rem', padding: '0', overflow: 'hidden' }}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                    alt="login form"
                                    className="img-fluid"
                                    style={{ borderRadius: '1rem 0 0 1rem' }}
                                />
                            </div>
                            <div
                                className={`col-md-6 col-lg-7 d-flex align-items-center ${styles['login-right-side']}`}
                            >
                                <div className="card-body p-4 p-lg-5 text-black">
                                    <div className="d-flex align-items-center mb-5 pb-1">
                                        <FontAwesomeIcon
                                            className="me-3"
                                            icon={faCubes}
                                            style={{ color: '#ff6219' }}
                                            size="2x"
                                        />
                                        <span className="h1 fw-bold mb-0">ĐĂNG NHẬP</span>
                                    </div>

                                    <div className="mb-4">
                                        <label className={styles['login-label']} htmlFor="account">
                                            Tên Tài Khoản
                                        </label>
                                        <input
                                            value={inputs.username}
                                            type="email"
                                            id="account"
                                            className={`${styles['login-input']} form-control form-control-lg `}
                                            onFocus={() => resetError()}
                                            onChange={(e) => updateValue('username', e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className={styles['login-label']} htmlFor="pass">
                                            Mật Khẩu
                                        </label>
                                        <input
                                            value={inputs.password}
                                            type="password"
                                            id="pass"
                                            className="form-control form-control-lg"
                                            onFocus={() => resetError()}
                                            onChange={(e) => updateValue('password', e.target.value)}
                                        />
                                    </div>
                                    <div style={{ height: '20px' }}>
                                        <span style={{ color: 'red' }}>{error}</span>
                                    </div>
                                    <div className="pt-1 mb-4 mt-3 row">
                                        <button
                                            className="btn btn-dark btn-lg btn-block"
                                            type="button"
                                            onClick={() => handleLogin()}
                                        >
                                            Đăng Nhập
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Login;
