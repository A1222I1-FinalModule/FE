import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '../../../Components/Image';
import Navbar from '../Navbar';
import Search from '../Search';
import Menu from '../../../Components/Popper/Menu';
import styles from './Header.module.scss';
import { LogoutIcon, UserIcon } from '../../../Components/Icons';
import Login from '../../../Components/Login';
import { Fragment, useEffect, useState } from 'react';
import Button from '../../../Components/Button';
import images from '../../../Assets/Images/index';
import NotificationList from '../../../Components/notification/NotificationList'
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Header({ hideSearch }) {
    const user = useSelector(store => store.users);
    const role = useSelector(store => store.users.role);
    const [modalShow, setModalShow] = useState(false);
    let href = "/";
    if (role) {
        switch (user.role[0]) {
            case 'ROLE_ADMIN':
                href = '/admin'
                break;
            case 'ROLE_SALE':
                href = '/sale'
                break;
            case 'ROLE_WAREHOUSE':
                href = '/warehouse'
                break;
            default:
                href = '/';
                break;
        }
    }

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Tài khoản của tôi',
            to: href,
        },
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/',
            separate: true,
            isLogout: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <Link to={'/'}>
                        <img className={cx('logo')} src={images.logo} alt="" />
                    </Link>

                    <Navbar />
                </div>
                <div className={cx('right')}>
                    {hideSearch ? <Search /> : <Fragment></Fragment>}
                    <div className={cx('actions')}>
                        <div className={cx("icon-container")}>
                            {user.login ? (<>
                                <NotificationList />
                                <Menu items={userMenu}>
                                    <div style={{ display: "inline-block" }}>

                                        <Image
                                            className={cx('user-avatar')}
                                            src={user.employee.image || images.defaultAvatar}
                                            alt=""
                                        />
                                        <span className='mx-2' style={{ cursor: "pointer" }}>{user.employee.name}</span>
                                    </div>
                                </Menu>

                            </>
                            ) : (
                                <Button primary onClick={() => setModalShow(true)} className={cx('login-btn')}>
                                    Đăng nhập
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Login show={modalShow} onHide={() => setModalShow(false)} />
        </header>
    );
}

export default Header;
