import { useEffect, useState } from 'react';
import classNames from 'classnames/bind'; 
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import * as productService from '../../Services/API/productService';
import ProductItem from '../ProductItem';
import styles from './SellingProduct.module.scss';

const cx = classNames.bind(styles);

function SellingProducts() {
    const [sellingProducts, setSellingProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const res = await productService.searchProducts({
                name: '',
                sortBy: 'quantity',
                sortOrder: 'asc',
                size: '20',
            });
            setSellingProducts(res);
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
                Hàng bán chạy nhất
            </h2>}

            <div className={cx('inner')}>
                <ProductItem data={sellingProducts} loading={loading} />
            </div>
        </div>
    );
}

export default SellingProducts;
