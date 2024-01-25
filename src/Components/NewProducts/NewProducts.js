import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import * as productService from '../../Services/productService';
import ProductItem from '../ProductItem';
import { ChevronRightIcon } from '../Icons';
import styles from './NewProducts.module.scss';

const cx = classNames.bind(styles);

function NewProduct() {
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await productService.searchProducts({
                name: '',
                sortBy: 'product_code',
                sortOrder: 'desc',
                size: '20',
            });
            setNewProducts(res);
        };

        fetchProduct();
    }, []);

    console.log(newProducts);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>
                Sản phẩm mới nhất
                <Link to={'/thoi-trang-nam-nu'} className={cx('more')}>
                    Xem thêm <ChevronRightIcon width="1.2rem" height="1.2rem" className={cx('icon')} />
                </Link>
            </h2>

            <div className={cx('inner')}>
                <ProductItem data={newProducts} />
            </div>
        </div>
    );
}

export default NewProduct;
