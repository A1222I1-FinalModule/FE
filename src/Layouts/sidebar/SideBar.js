import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
import { useUser } from '../../Services/UserContext';
export default function SideBar() {
    const { getRole } = useUser();
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const userRoles = await getRole();
                setRoles(userRoles);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };
        fetchRoles();
    }, [getRole]);
    const renderingSideBar = () => {
        if (Array.isArray(roles)) {
            if (roles.includes('ROLE_ADMIN')) {
                console.log(`Role: ${roles}`);
                return (
                    <>
                        <div className={style.list_item}>
                            <div className={style.contain_item}>
                                <Link to="/admin/report" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Xem Báo Cáo</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={style.contain_item}>
                                <Link to="/admin/discount" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Giảm Giá</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={style.contain_item}>
                                <Link to="/admin/notification" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Đăng Thông Báo</span>
                                        </div>
                                    </div>
                                </Link>
                                <a href="/admin/customer" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Khách Hàng</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </>
                );
            } else if (roles.includes('ROLE_SALE')) {
                return (
                    <>
                        <div className={style.list_item}>
                            <div className={style.contain_item}>
                                <a href="/sale/dashboard" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Thanh Toán</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={style.contain_item}>
                                <a href="/abc" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Thống Kê</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={style.contain_item}>
                                <a href="/abc" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Hàng Trong Kho</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={style.contain_item}>
                                <a href="/abc" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Thông Báo Mới</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </>
                );
            } else if (roles.includes('ROLE_WAREHOUSE')) {
                console.log(`Role: ${roles}`);
                return (
                    <>
                        <div className={style.list_item}>
                            <div className={style.contain_item}>
                                <a href="/abc" className={style.single_option}>
                                    <div className={style.item_sidebar}>
                                        <div className={style.item_title}>
                                            <ion-icon name="logo-buffer"></ion-icon>
                                            <span>Thông tin cá nhân</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </>
                );
            }
        }
    };
    return (
        <div className={`${style.sidebar} col col-lg-2 col-md-4 col-0 pe-0`}>
            <div className={style.sidebar_container}>{renderingSideBar()}</div>
        </div>
    );
}
