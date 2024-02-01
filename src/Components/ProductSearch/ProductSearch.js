import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { formatMoney, convertSlug } from '../../utils/helpers';
import Image from '../Image';
import styles from './ProductSearch.module.scss';

const cx = classNames.bind(styles);

function ProductSearch({ data }) {
    return (
        <Link to={convertSlug(data.name)} className={cx('wrapper')}>
            <Image className={cx('thumbnail')} src={data.image} alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.name}</h4>
                <span className={cx('price')}>{formatMoney(data.price * 0.75)}</span>
            </div>
        </Link>
    );
}

ProductSearch.propTypes = {
    data: PropTypes.object,
}

export default ProductSearch;
