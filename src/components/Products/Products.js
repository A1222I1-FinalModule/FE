import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import * as productService from '../../Services/API/productService';
import ProductItem from '../ProductItem'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const res = await productService.getProducts();
            setProducts(res);
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        };

        fetchProduct();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {loading ? <SkeletonTheme>
                <Skeleton width={200} height={30} count={1} />
            </SkeletonTheme> : <h2 className={cx('title')}>
                <span>Thời trang nam nữ</span>
            </h2>}

            <div className={cx('inner')}>
                <ProductItem data={products} number={20} loading={loading} />
            </div>
        </div>
    );
}

export default Products;
