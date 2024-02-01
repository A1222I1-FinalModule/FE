import React, { useEffect, useState } from 'react';
import style from './infomation.module.css'
import ChangePass from './modal/changePass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faBookmark, faCloud, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { getUser } from '../../Services/API/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Services/API/authService';
import images from '../../Assets/Images'
const Info = () => {

    const [employee, setEmployee] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate("/home");

    }
    const getEmployee = async () => {
        const employee = await getUser();
        setEmployee(employee);
    }
    useEffect(() => {
        getEmployee();
    }, [])
    if (employee == null) {
        return null
    }
    return (
        <>
            <div className={style.content + '  ps-0'}>
                <div className={style['inf-content'] + 'panel-body'}>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img
                                alt=""
                                style={{ width: "300px", height: "300px" }}
                                title=""
                                className={style['img-thumbnail'] + " " + style["img"] + " " + style['img-circle']}
                                src={employee.image || images.noImage}
                                data-original-title="Usuario"
                            />

                        </div>
                        <div className="col-md-6">
                            <h1 className={style['text-title']}><strong >Thông tin cá nhân</strong><br /></h1>
                            <div className="table-responsive">
                                <table className={style["table-td"] + " table table-user-information"}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span
                                                        className={style['icon-container']}
                                                    ><FontAwesomeIcon icon={faAsterisk} className={style['icon']} /></span>
                                                    Mã Nhân Viên
                                                </strong>
                                            </td>
                                            <td className="text-primary">{employee.id}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>

                                                    <span
                                                        className={style['icon-container']}
                                                    ><FontAwesomeIcon className={style['icon']} icon={faUser} /></span>
                                                    Tên Nhân Viên
                                                </strong>
                                            </td>
                                            <td className="text-primary">{employee.name}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>

                                                    <span
                                                        className={style['icon-container']}
                                                    >
                                                        <FontAwesomeIcon className={style['icon']} icon={faCloud} />
                                                    </span>
                                                    Ngày Sinh
                                                </strong>
                                            </td>
                                            <td className="text-primary">{employee.dateOfBirth}</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>

                                                    <span
                                                        className={style['icon-container']}
                                                    >
                                                        <FontAwesomeIcon className={style['icon']} icon={faBookmark} />
                                                    </span>
                                                    Địa Chỉ
                                                </strong>
                                            </td>
                                            <td className="text-primary">{employee.address}</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>

                                                    <span
                                                        className={style['icon-container']}
                                                    >
                                                        <FontAwesomeIcon className={style['icon']} icon={faPhone} />
                                                    </span>
                                                    Số Điện Thoại
                                                </strong>
                                            </td>
                                            <td className="text-primary">{employee.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button
                                                    type="button"
                                                    className={style['btnInfo'] + " btn btn-primary"}
                                                    onClick={() => setModalShow(true)}
                                                >
                                                    Đổi Mật Khẩu
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className={style['btnInfo'] + " btn btn-warning"} onClick={handleLogout}>Đăng Xuất</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChangePass show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

export default Info;