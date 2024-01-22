import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { formatMoney, convertSlug } from '../../utils/helpers';
import Image from '../Image';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data, number }) {
    return (
        <div className={cx('wrapper')}>
            {data?.slice(0, number).map((product) => (
                <div key={product.productCode} className={cx('product-item')}>
                    <Link className={cx('thumbnail')}>
                        <Image src={product.image} alt={product.name} />
                    </Link>
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <Link to={convertSlug(product.name)}>{product.name}</Link>
                        </h4>
                        <p className={cx('price')}>{formatMoney(product.price)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

ProductItem.propType = {
    data: PropTypes.array.isRequired,
    number: PropTypes.number.isRequired,
};

export default ProductItem;
