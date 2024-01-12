import React from "react";
import Header from "../Layouts/Header/Header";
import "../assets/Styles/StyleDashBoard.css";
import SideBarWareHouse from "../Layouts/sidebar/SideBarWareHouse";
import { ContentWareHouse } from "../Components/ContentWareHouse";

export const Saler = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="row">
          <SideBarWareHouse></SideBarWareHouse>
          <ContentWareHouse></ContentWareHouse>
        </div>
      </div>
    </>
  );
};
