import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import { HelpIcon, LookOrderIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import images from '~/assest/images';
import Search from '~/layouts/components/Search';
import Navbar from '~/layouts/components/Navbar';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top')}>
                    <div className={cx('top-left')}>
                        <Link to={config.routes.home} className={cx('logo')}>
                            <img src={images.logo} alt="Fashion" width={50} />
                        </Link>

                        <Search />
                    </div>
                    <div className={cx('top-right')}>
                        <div className={cx('actions')}>
                            <button className={cx('action-btn')}>
                                <LookOrderIcon />
                                <span className={cx('title')}>Tra cứu đơn hàng</span>
                            </button>

                            <button className={cx('action-btn')}>
                                <HelpIcon />
                                <span className={cx('title')}>Trung tâm hỗ trợ</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('bottom-left')}>
                        <Navbar />
                    </div>
                    <div className={cx('bottom-right')}>
                        <div className={cx('actions')}>
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                                <span className={cx('title')}>Thông báo</span>
                            </button>

                            {currentUser ? (
                                <>
                                    <button className={cx('action-btn')}>Đăng Ký</button>
                                    <button className={cx('action-btn')}>Đăng Nhập</button>
                                </>
                            ) : (
                                <div className={cx('user')}>
                                    <Image
                                        className={cx('user-avatar')}
                                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693227600&x-signature=SHbv%2FYn%2BKVlerP8LDRcBk6Ufdts%3D"
                                        alt=""
                                    />
                                    <span className={cx('title')}>ndquan061102</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
