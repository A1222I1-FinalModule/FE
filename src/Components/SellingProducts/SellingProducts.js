import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import * as productService from '../../Services/API/productService';
import ProductItem from '../ProductItem';
import { ChevronRightIcon } from '../Icons';
import styles from './SellingProduct.module.scss';

const cx = classNames.bind(styles);

function SellingProducts() {
    const [sellingProducts, setSellingProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await productService.searchProducts({
                name: '',
                sortBy: 'quantity',
                sortOrder: 'asc',
                size: '20',
            });
            setSellingProducts(res);
        };

        fetchProduct();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>
                Hàng bán chạy nhất
            </h2>

            <div className={cx('inner')}>
                <ProductItem data={sellingProducts} />
            </div>
        </div>
    );
}

export default SellingProducts;
