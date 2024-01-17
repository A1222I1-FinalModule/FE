import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem to={'/'} title="Trang chủ" />
                <MenuItem to={'/news'} title="Tin tức" />
            </Menu>
        </div>
    );
}

export default Navbar;
