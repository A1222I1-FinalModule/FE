import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as productService from '../../Services/productService';
import ProductItem from '../ProductItem';
import Button from '../Button';
import styles from './ProductGender.module.scss';

const cx = classNames.bind(styles);

function ProductGender({ category }) {
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const fetchProductGender = async () => {
            const res = await productService.searchProductCategories(category);
            setProducts(res);
        };

        fetchProductGender();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Đề xuất cho bạn</h2>
            <div className={cx('inner')}>
                <ProductItem data={products} number={size} />
            </div>

            {size === 10 && (
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