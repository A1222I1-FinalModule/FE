import classNames from 'classnames/bind';

import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="Trang chủ" />
                <MenuItem to={config.routes.news} title="Tin tức" />
            </Menu>
        </div>
    );
}

export default Navbar;
