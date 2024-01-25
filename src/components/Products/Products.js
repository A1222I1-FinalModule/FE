import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as productService from '../../Services/productService';
import styles from './Products.module.scss';
import ProductItem from '../ProductItem'

const cx = classNames.bind(styles);

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await productService.getProducts();
            setProducts(res);
        };

        fetchProduct();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>
                <span>Thời trang nam nữ</span>
            </h2>

            <div className={cx('inner')}>
                <ProductItem data={products} number={20} />
            </div>
        </div>
    );
}

export default Products;
