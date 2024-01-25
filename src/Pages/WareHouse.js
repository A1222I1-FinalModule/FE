import React from "react";
import Header from "../Layouts/Header/Header";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import SideBarWareHouse from "../Layouts/sidebar/SideBarWareHouse";
import { ContentWareHouse } from "../Components/ContentWareHouse";

export const Warehouse = ({ children }) => {
  return (
      <div>
        <Header></Header>
        <div className="row h-100">
          <SideBarWareHouse></SideBarWareHouse>
          <div className={style.content + ' col-10 ps-0'}>
            {children}

          </div>
        </div>
      </div>
  );
};
