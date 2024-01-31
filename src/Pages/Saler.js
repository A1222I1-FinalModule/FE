import { React } from "react";
import Header from "../Layouts/Header/Header";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import { ContentSaler } from "../Components/ContentSaler";
import SideBar from '../Layouts/sidebar/SideBar';
const Saler = ({ children }) => {
  return (
    <>
      <div>
        <Header>
        </Header>
        <div className="row h-100">
          <SideBar></SideBar>
          <div className={style.content + ' col-10 ps-0'}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Saler;