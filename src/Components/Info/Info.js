import React from 'react';
import style from './infomation.module.css'
import avatar from '../../Assets/images/Anh-avatar-dep-anh-dai-dien-FB-Tiktok-Zalo.webp'
const Info = () => {
    return (
        <>
            <div className={style.content + ' col-10 ps-0'}>
                <div className={style['inf-content'] + 'panel-body'}>
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                alt=""
                                style={{ width: "300px" }}
                                title=""
                                className='img-thumbnail img-circle isTooltip'
                                src={avatar}
                                data-original-title="Usuario"
                            />

                        </div>
                        <div className="col-md-6">
                            <strong>Thông tin cá nhân</strong><br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span
                                                        className="glyphicon glyphicon-asterisk text-primary"
                                                    ></span>
                                                    Mã Nhân Viên
                                                </strong>
                                            </td>
                                            <td className="text-primary">123456789</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span
                                                        className="glyphicon glyphicon-user text-primary"
                                                    ></span>
                                                    Tên Nhân Viên
                                                </strong>
                                            </td>
                                            <td className="text-primary">Peter Pan</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span
                                                        className="glyphicon glyphicon-cloud text-primary"
                                                    ></span>
                                                    Ngày Sinh
                                                </strong>
                                            </td>
                                            <td className="text-primary">12/09/1993</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>
                                                    <span
                                                        className="glyphicon glyphicon-bookmark text-primary"
                                                    ></span>
                                                    Địa Chỉ
                                                </strong>
                                            </td>
                                            <td className="text-primary">Hoà Khánh, Đà Nẵng</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>
                                                    <span
                                                        className="glyphicon glyphicon-earphone text-primary"
                                                    ></span>
                                                    Số Điện Thoại
                                                </strong>
                                            </td>
                                            <td className="text-primary">0123456789</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-toggle="modal"
                                                    data-target="#changePassword"
                                                >
                                                    Đổi Mật Khẩu
                                                </button>
                                            </td>
                                            <td><button type="button" className="btn btn-warning">Đăng Xuất</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="changePassword"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <h2 className="text-center mb-4">Thay Đổi Mật Khẩu</h2>
                                        <form>
                                            <div className="form-group">
                                                <label for="currentPassword">Mật Khẩu Hiện Tại</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="currentPassword"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="newPassword">Mật Khẩu Mới</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="newPassword"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="confirmPassword">Xác Nhận Mật Khẩu Mới</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="confirmPassword"
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Thay Đổi Mật Khẩu
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Info;