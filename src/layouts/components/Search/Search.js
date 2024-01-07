import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>

            <input placeholder="Tìm kiếm..." />
        </div>
    );
}

export default Search;
