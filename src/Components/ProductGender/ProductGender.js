import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { formatMoney, convertSlug } from '../../utils/helpers';
import * as productService from '../../Services/productService';
import styles from './ProductGender.module.scss';
import ProductItem from '../ProductItem';

const cx = classNames.bind(styles);

function ProductGender({ category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProductGender = async () => {
            const res = await productService.searchProductCategories(category);
            setProducts(res);
        };

        fetchProductGender();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Thời trang {category === '1' ? 'nam' : 'nữ'}</h2>
            <div className={cx('inner')}>
                <ProductItem data={products} number={10} />
            </div>
        </div>
    );
}

export default ProductGender;
