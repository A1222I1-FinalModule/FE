import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { formatMoney, convertSlug } from '../../utils/helpers';
import * as productService from '../../Services/API/productService';
import styles from './ProductGender.module.scss';

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
                {products.slice(0, 10).map((product) => (
                    <div key={product.productCode} className={cx('product-item')}>
                        <Link className={cx('thumbnail')}>
                            <img src={product.image} alt={product.name} />
                        </Link>
                        <div className={cx('info')}>
                            <h4 className={cx('name')}>
                                <Link to={convertSlug(product.name)}>{product.name}</Link>
                            </h4>

                            <p className={cx('price')}>{formatMoney(product.price)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGender;
