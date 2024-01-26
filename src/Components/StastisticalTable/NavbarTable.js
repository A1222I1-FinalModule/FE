import { Link } from 'react-router-dom';
import style from '../../Assets/css/StatisticalTable.module.css';

const NavbarTable = () => {
  return (
    <div className={`col-2 p-0`}>
      <ul className={style.statistical_navbar}>
        <li className={style.navbar_item}>
          <Link to="daily" className={`${style.navbar_item_link} active`}>
            Thống kê theo ngày
          </Link>
        </li>
        <li className={style.navbar_item}>
          <Link to="monthly" className={style.navbar_item_link}>
            Thống kê theo tháng
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarTable