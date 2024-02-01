import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import * as productService from '../../Services/productService';
import ProductItem from '../ProductItem';
import Button from '../Button';
import styles from './ProductGender.module.scss';

const cx = classNames.bind(styles);

function ProductGender({ category }) {
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState(10);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProductGender = async () => {
            setLoading(true);
            const res = await productService.searchProductCategories(category);
            setProducts(res);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        };

        fetchProductGender();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {loading ? <div className={cx('title')}>
                <SkeletonTheme>
                    <Skeleton width={300} height={30} count={1} />
                </SkeletonTheme>
            </div> : <h2 className={cx('title')}>Đề xuất cho bạn</h2>}
            <div className={cx('inner')}>
                <ProductItem data={products} number={size} loading={loading} />
            </div>

            {loading ? <div className={cx('more')}>
                <SkeletonTheme>
                    <Skeleton width={300} height={50} count={1} />
                </SkeletonTheme>
            </div> : size === 10 && (
                <div className={cx('more')}>
                    <Button primary className={cx('more-btn')} onClick={() => setSize(20)}>
                        Xem thêm
                    </Button>
                </div>
            )}
        </div>
    );
}

export default ProductGender;