import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import Navbar from '~/layouts/components/Navbar';
import Search from '~/layouts/components/Search';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import { LogoutIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: '',
        },
        {
            icon: <LogoutIcon />,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <Link>
                        <img
                            className={cx('logo')}
                            src="https://media-fmplus.cdn.vccloud.vn/uploads/gui/4795312b-8e83-4876-b497-340f9c755df0.png"
                            alt=""
                            width={60}
                        />
                    </Link>

                    <Navbar />
                </div>
                <div className={cx('right')}>
                    <Search />
                    <div className={cx('actions')}>
                        <Menu>
                            {currentUser ? (
                                <Image className={cx('user-avatar')} src="" alt="" />
                            ) : (
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=y4CS_aO5lE0AX8RrZBP&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDNhfpETPCX4z53p6vkobsD8YfW9Uhm_Z30kh_7YDTMjA&oe=65C8A7B8"
                                    alt=""
                                />
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
