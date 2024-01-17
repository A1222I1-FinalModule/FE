import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../../Popper';
import Tippy from '@tippyjs/react/headless';
import { logout } from '../../../Services/API/authService';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ items = [], hideOnClick = false, children }) {
    const handleLogout = async () => {
        await logout();
        window.location.reload(false);
    };

    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} onClick={() => {
                if (item.to === '/' && item.title === 'Đăng xuất') {
                    handleLogout()
                }
            }} />
        }
        )
    }

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy
            interactive
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
