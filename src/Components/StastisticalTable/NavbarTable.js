import { Link } from 'react-router-dom';
import style from '../../Assets/css/StatisticalTable.module.css';
import { useEffect, useState } from 'react';
import { useUser } from '../../Services/UserContext'
const NavbarTable = () => {
  const user = useUser();
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const userRoles = await user.getRole(user.jwt);
        setRoles(userRoles);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };
    fetchRoles();
  }, []);
  const renderingNavBar = () => {
    if (Array.isArray(roles)) {
      console.log(roles);
      if (roles.includes('ROLE_ADMIN')) {
        console.log(`Role: ${roles}`)
        return (
          <>
            <ul className={style.statistical_navbar}>
              <li className={style.navbar_item}>
                <Link to="/admin/daily" className={`${style.navbar_item_link} active`}>
                  Thống kê theo ngày
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link to="/admin/monthly" className={style.navbar_item_link}>
                  Thống kê theo tháng
                </Link>
              </li>
            </ul>
          </>
        );
      } else if (roles.includes('ROLE_SALE')) {
        return (
          <>
            <ul className={style.statistical_navbar}>
              <li className={style.navbar_item}>
                <Link to="/sale/daily" className={`${style.navbar_item_link} active`}>
                  Thống kê theo ngày
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link to="/sale/monthly" className={style.navbar_item_link}>
                  Thống kê theo tháng
                </Link>
              </li>
            </ul>
          </>
        );
      } else if (roles.includes('ROLE_WAREHOUSE')) {
        console.log(`Role: ${roles}`)
        return (
          <>
            <ul className={style.statistical_navbar}>
              <li className={style.navbar_item}>
                <Link to="/warehouse/daily" className={`${style.navbar_item_link} active`}>
                  Thống kê theo ngày
                </Link>
              </li>
              <li className={style.navbar_item}>
                <Link to="/warehouse/monthly" className={style.navbar_item_link}>
                  Thống kê theo tháng
                </Link>
              </li>
            </ul>
          </>
        );
      }
    }
  }
  return (
    <>
      {renderingNavBar()}
    </>
  );
}

export default NavbarTable