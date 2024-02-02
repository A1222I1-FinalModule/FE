import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('top')}>
                    <div className={cx('top-item')}>
                        <p>“Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động
                            của mình”</p>
                    </div>
                    <div className={cx('top-item')}>
                        <h4 className={cx('title-menu')}>Danh mục sản phẩm</h4>
                        <ul className={cx('list-menu')}>
                            <li className={cx('menu-item')}>
                                <Link to={'/nam'}>Thời trang nam</Link>
                            </li>
                            <li className={cx('menu-item')}>
                                <Link to={'/nu'}>Thời trang nữ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('top-item')}>
                        <h4 className={cx('title-menu')}>Dự án nhóm</h4>
                        <ul className={cx('list-menu')}>
                            <li className={cx('menu-item')}>Quản lý cửa hàng thời trang</li>
                        </ul>
                    </div>
                    <div className={cx('top-item')}>
                        <h4 className={cx('title-menu')}>Về Thành Viên Nhóm</h4>
                        <ul className={cx('list-menu')}>
                            <li className={cx('menu-item')}>Phan Văn Ái</li>
                            <li className={cx('menu-item')}>Dương Văn Bảo</li>
                            <li className={cx('menu-item')}>Bùi Minh Thành</li>
                            <li className={cx('menu-item')}>Hồ Phúc Tâm</li>
                            <li className={cx('menu-item')}>Nguyễn Ngọc Bảo Nhân</li>
                            <li className={cx('menu-item')}>Dương Văn Bảo</li>
                            <li className={cx('menu-item')}>Trương Thanh Trường</li>
                            <li className={cx('menu-item')}>Nguyễn Văn Quân</li>
                            <li className={cx('menu-item')}>Nguyễn Đình Quân</li>
                        </ul>
                    </div>
                </div>

                <hr className={cx('separate')} />
                <h2 className={cx('coryright')}>
                    <span>@Trang web được hoàn thành bởi các thành viên lớp <b>A1222I1</b>.</span>
                </h2>
            </div>
        </footer>
    );
}

export default Footer;
