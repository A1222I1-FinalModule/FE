import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

import { formatMoney, convertSlug } from '../../utils/helpers';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <Link to={convertSlug(data.name)} className={cx('wrapper')}>
            <Image className={cx('thumbnail')} src={data.image} alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>{data.name}</h4>
                <span className={cx('price')}>{formatMoney(data.price)}</span>
            </div>
        </Link>
    );
}

export default ProductItem;
