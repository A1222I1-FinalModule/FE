import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import * as productService from '../../Services/productService';
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

    console.log(sellingProducts);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>
                Hàng bán chạy nhất
                <Link to={'/thoi-trang-nam-nu'} className={cx('more')}>
                    Xem thêm <ChevronRightIcon width="1.2rem" height="1.2rem" className={cx('icon')} />
                </Link>
            </h2>

            <div className={cx('inner')}>
                <ProductItem data={sellingProducts} />
            </div>
        </div>
    );
}

export default SellingProducts;
