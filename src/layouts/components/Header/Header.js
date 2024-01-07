import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Navbar from '~/layouts/components/Navbar';
import Search from '~/layouts/components/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
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
                    <div className={cx('actions')}>Actions</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
