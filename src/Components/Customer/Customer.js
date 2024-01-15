import classNames from 'classnames/bind';
import styles from './Customer.module.scss';

const cx = classNames.bind(styles);

function Customer() {
    return <div className={cx('container')}></div>;
}

export default Customer;
