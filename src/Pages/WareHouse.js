import React from "react";
import "../Assets/Styles/StyleDashBoard.css";
import { ContentWareHouse } from "../Components/ContentWareHouse";
import Header from "../Layouts/Header/Header";
import SideBarWareHouse from "../Layouts/sidebar/SideBarWareHouse";

export const WareHouse = () => {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <SideBarWareHouse></SideBarWareHouse>
        <ContentWareHouse></ContentWareHouse>
      </div>
    </div>
  );
};
