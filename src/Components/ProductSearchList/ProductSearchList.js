import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ProductItem from '../ProductItem';
import styles from './ProductSearchList.module.scss';

const cx = classNames.bind(styles);

function ProductSearchList({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h4 className={cx('sub-heading')}>Tìm kiếm</h4>
                <h2 className={cx('heading')}>Kết quả tìm kiếm sản phẩm</h2>
            </div>
            <div className={cx('inner')}>
                <ProductItem data={data} number={20} />
            </div>
        </div>
    );
}

ProductSearchList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ProductSearchList;
