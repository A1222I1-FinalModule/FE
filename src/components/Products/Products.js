import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as productService from '../../Services/productService';
import styles from './Products.module.scss';
import { Link } from 'react-router-dom';

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
            <h2 className={cx('heading')}>Trang phục</h2>

            <div className={cx('inner')}>
                {products.slice(0, 20).map((product) => (
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
                            <p className={cx('price')}>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
