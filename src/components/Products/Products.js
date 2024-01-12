import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import { Link } from 'react-router-dom';

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
    {
        productCode: 'H002',
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
    {
        productCode: 'H003',
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
    {
        productCode: 'H003',
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
    {
        productCode: 'H004',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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
    {
        productCode: 'H005',
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
    {
        productCode: 'H006',
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

function Products() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Trang phục</h2>

            <div className={cx('inner')}>
                {PRODUCTS.slice(0, 20).map((product) => (
                    <div key={product.productCode} className={cx('product-item')}>
                        <Link className={cx('thumbnail')}>
                            <img
                                src={
                                    'https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDNUVEE1MzYzMDAxL2MyYTI0NzkxLTNjMTAtNDA2YS1hMmM0LTcxY2UyZjlhZmUwOF81ODE4NzRFNTQ1MDREMzU2MTlGRDNENTRCMzZEOUJBRS5qcGc1'
                                }
                                alt=""
                            />
                        </Link>
                        <div className={cx('info')}>
                            <h4 className={cx('name')}>{product.name}</h4>
                            <p className={cx('price')}>Price</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
