import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../../components/Popper';
import { ClearIcon, SearchIcon, SpinnerIcon } from '../../../components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>

                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && <SpinnerIcon className={cx('loading')} />}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
