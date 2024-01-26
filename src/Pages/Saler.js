import { React } from "react";
import Header from "../Layouts/Header/Header";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import SideBarSaler from "../Layouts/sidebar/SideBarSaler";
import { ContentSaler } from "../Components/ContentSaler";
import HeaderSaler from "../Layouts/Header/HeaderSaler";
const Saler = ({ children }) => {
  return (
    <>
      <div>
        <Header>
        </Header>
        <div className="row h-100">
          <SideBarSaler></SideBarSaler>
          <div className={style.content + ' col-10 ps-0'}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Saler;