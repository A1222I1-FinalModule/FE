import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as productService from '~/services/productService';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

const PRODUCTS = [
    {
        productCode: '10',
        name: 'áo dài',
        quantity: 10,
        productCategory: {
            id: 2,
            name: 'Nữ',
        },
        size: {
            id: 1,
            size: 'XS',
        },
    },
    {
        productCode: '2',
        name: 'áo dài',
        quantity: 10,
        productCategory: {
            id: 2,
            name: 'Nữ',
        },
        size: {
            id: 2,
            size: 'S',
        },
    },
    {
        productCode: '3',
        name: 'áo sơ mi',
        quantity: 10,
        productCategory: {
            id: 2,
            name: 'Nữ',
        },
        size: {
            id: 2,
            size: 'S',
        },
    },
    {
        productCode: '6',
        name: 'áo sơ mi',
        quantity: 10,
        productCategory: {
            id: 2,
            name: 'Nữ',
        },
        size: {
            id: 2,
            size: 'S',
        },
    },
    {
        productCode: '7',
        name: 'áo sơ mi',
        quantity: 10,
        productCategory: {
            id: 2,
            name: 'Nữ',
        },
        size: {
            id: 3,
            size: 'M',
        },
    },
    {
        productCode: 'H001',
        name: 'Quần tây',
        quantity: 10,
        productCategory: {
            id: 1,
            name: 'Nam',
        },
        size: {
            id: 2,
            size: 'S',
        },
    },
];

function Product() {
    return (
        <div className={cx('wrapper')}>
            <h1>Trang phục</h1>

            <div className={cx('card')}>
                {PRODUCTS.map((product, index) => (
                    <div className={cx('card-item')}>
                        <div className={cx('')}>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/apm6297-tra-ao-polo-nam-3.jpg?v=1688723284237"
                                alt=""
                            />
                        </div>
                        <div className={cx('content')}>
                            <h2 className={cx('title')}>{product.name}</h2>
                            <p className={cx('price')}>Price</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
