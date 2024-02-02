import React, { useEffect, useState } from 'react';
import style from './infomation.module.css'
import ChangePass from './modal/changePass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faBookmark, faCloud, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import images from '../../Assets/Images'
import { useSelector } from 'react-redux';
const Info = () => {

    const employee = useSelector(store => store.users.employee)
    const [modalShow, setModalShow] = useState(false);



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