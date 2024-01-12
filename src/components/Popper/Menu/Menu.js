import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ hideOnClick = false, children }) {
    return (
        <Tippy
            interactive
            visible
            offset={[12, 8]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <h1>Hello</h1>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
