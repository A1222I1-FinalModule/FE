import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { formatMoney, convertSlug } from '../../utils/helpers';
import * as productService from '../../Services/API/productService';
import styles from './Products.module.scss';

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
            <h2 className={cx('heading')}>Thời trang nam nữ</h2>
            <div className={cx('inner')}>
                {products.slice(0, 20).map((product) => (
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

export default Products;
