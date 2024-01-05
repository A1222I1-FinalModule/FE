import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import { ClearIcon, SearchIcon, SpinnerIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowResult(false);
            setSearchResult([1, 2, 3]);
        }, 1000);
    }, [searchValue]);

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm" />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')}>
                            <ClearIcon />
                        </button>
                    )}

                    {loading && <SpinnerIcon className={cx('loading')} />}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
