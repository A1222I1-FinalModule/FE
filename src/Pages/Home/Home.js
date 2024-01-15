import classNames from 'classnames/bind';
import Banner from '../../Components/Banner';
import Header from '../../Layouts/components/Header';
import Footer from '../../Layouts/components/Footer';
import Products from '../../Components/Products';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Banner />
                    <Products />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
