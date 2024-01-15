import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '../../Popper';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Button } from 'react-bootstrap';
import { logout } from '../../../Services/API/authService';

const cx = classNames.bind(styles);

function Menu({ hideOnClick = false, children }) {
    const handleLogout = async () => {
        await logout();
        window.location.reload(false);
    };
    return (
        <Tippy
            interactive
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <Button onClick={handleLogout}>Logout</Button>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
