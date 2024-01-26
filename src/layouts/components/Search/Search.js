import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { useDebounce } from '../../../Hooks';
import * as productService from '../../../Services/API/productService';
import { Wrapper as PopperWrapper } from '../../../Components/Popper';
import Button from '../../../Components/Button';
import { ClearIcon, SearchIcon, SpinnerIcon } from '../../../Components/Icons';
import ProductSearch from '../../../Components/ProductSearch';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await productService.searchProducts({ name: searchValue, size: '20' });
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

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
                            <h4 className={cx('search-title')}>Sản phẩm</h4>
                            {searchResult.slice(0, 5).map((result) => (
                                <ProductSearch key={result.id} data={result} />
                            ))}

                            <Button
                                className={cx('search-more')}
                                onClick={() => {
                                    navigate(`/search?q=${searchValue}`, { state: { data: searchResult } });
                                    setSearchValue('');
                                }}
                            >
                                Xem thêm
                            </Button>
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
