
import { Fragment } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { formatMoney, convertSlug } from '../../utils/helpers';
import Image from '../Image';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data, number, loading }) {
    console.log(loading)
    return (
        <div className={cx('wrapper')}>
            {loading ?
                <SkeletonTheme baseColor="#F3F3F3" highlightColor="#444" duration={1.5} enableAnimation>
                    {data?.slice(0, number).map((product) => (
                        <div key={product.productCode} className={cx('product-item')}>
                            <Skeleton height={330} count={1} />
                            <div className={cx('info')}>
                                <Skeleton height={36} count={1} />
                                <Skeleton width={150} count={1} />
                            </div>
                        </div>
                    ))}
                </SkeletonTheme>
                : <Fragment>
                    {data?.slice(0, number).map((product) => (
                        <div key={product.productCode} className={cx('product-item')}>
                            <Link to={convertSlug(product.name)} className={cx('thumbnail')}>
                                <Image loading="lazy" src={product.image} alt={product.name} />
                            </Link>
                            <div className={cx('info')}>
                                <h4 className={cx('name')}>
                                    <Link to={convertSlug(product.name)}>{product.name}</Link>
                                </h4>
                                <p>
                                    <span className={cx('discount')}>{formatMoney(product.price * 0.75)}</span>
                                    <span className={cx('price')}>{formatMoney(product.price)}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </Fragment>
            }
        </div>
    );
}

export default ProductItem;
