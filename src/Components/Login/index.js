import React, { useState } from 'react';
import { LoginAPI } from '../../Services/API/authService';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import styles from '../../Assets/Styles/Login/login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  ERROR_FIELD_EMPTY,
  ERROR_FIELD_HAS_SPECIAL_CHARACTERS,
  ERROR_UNAUTHORIZED,
  REGEX_SPECIAL_CHARACTERS,
} from '../../Constants/LoginConstant/index';
import logoLogin from '../../Assets/Images/login.webp'
import { Button } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginMiddleware } from '../../redux/midleware/UserMiddleware';
import { jwtDecode } from 'jwt-decode';
const Login = (props) => {
  const [cookie, setCookie] = useCookies(['jwt']);
  const dispatch = useDispatch();
  const defaultInput = {
    username: '',
    password: '',
  };
  const user = useSelector(store => store.users);
 
  const navigate = useNavigate();
  const [loadings, setLoadings] = useState([]);
  const [inputs, setInputs] = useState(defaultInput);
  const [error, setError] = useState('');
  const [type, setType] = useState('password');
  const [isShowPass, setIsShowPass] = useState(false);
  const updateValue = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };
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
  const handleShowPass = () => {
    if (isShowPass) {
      setType('password');
    } else {
      setType('text');
    }
    setIsShowPass(!isShowPass);
  }
  const resetError = () => setError('');
  const handleLogin = async () => {
    enterLoading(1);
    let isValid = true;
    if (REGEX_SPECIAL_CHARACTERS.test(inputs.username) || REGEX_SPECIAL_CHARACTERS.test(inputs.password)) {
      isValid = false;
      closedLoading(1);
      setError(ERROR_FIELD_HAS_SPECIAL_CHARACTERS);
    }
    if (inputs.username.length === 0 || inputs.password.length === 0) {
      isValid = false;
      closedLoading(1);
      setError(ERROR_FIELD_EMPTY);
    }
    if (isValid) {
      LoginAPI(inputs)
        .then(async (response) => {
          setCookie('jwt', response);
           dispatch(await handleLoginMiddleware(response));
          const roles = await jwtDecode(response).authorities;
          return roles
        })
        .then((roles) => {
          if (roles.length > 0) {
            console.log(roles);
            for (let i = 0; i <= roles.length; i++) {
              if (roles[i] === 'ROLE_ADMIN') {
                navigate('/admin');
              } else if (roles[i] === 'ROLE_SALE') {
                navigate('/sale');
              } else if (roles[i] === 'ROLE_WAREHOUSE') {
                navigate('/warehouse');
              }

            }
          }
        })
        .catch((error) => {
          console.log(error);
          closedLoading(1);
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
                  src={logoLogin}
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

                  <div className="mb-4" style={{ position: 'relative' }}>
                    <label className={styles['login-label']} htmlFor="pass">
                      Mật Khẩu
                    </label>
                    <input
                      value={inputs.password}
                      type={type || 'password'}
                      id="pass"
                      className="form-control form-control-lg"
                      onFocus={() => resetError()}
                      onChange={(e) => updateValue('password', e.target.value)}
                    />
                    {isShowPass ? (<EyeInvisibleOutlined className={styles['icon-eye']} onClick={handleShowPass} />) : (<EyeOutlined className={styles['icon-eye']} onClick={handleShowPass} />)}


                  </div>
                  <div style={{ height: '20px' }}>
                    <span style={{ color: 'red' }}>{error}</span>
                  </div>
                  <div className="pt-1 mb-4 mt-3 row">
                    <Button
                      type="primary"
                      icon={<PoweroffOutlined />}
                      loading={loadings[1]}
                      onClick={() => handleLogin()}
                    >
                      Đăng Nhập
                    </Button>
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
