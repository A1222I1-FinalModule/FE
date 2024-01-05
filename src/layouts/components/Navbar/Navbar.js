import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title={'Trang chủ'} to={config.routes.home} />
                <MenuItem title={'Nam'} to="/nam" />
                <MenuItem title={'Nữ'} to="/nu" />
                <MenuItem title={'Trẻ em'} to="/tre-em" />
                <MenuItem title={'Tin tức'} to={config.routes.news} />
            </Menu>
        </div>
    );
}

export default Navbar;
