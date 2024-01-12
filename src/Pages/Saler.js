import React from "react";
import Header from "../Layouts/Header/Header";
import "../assets/Styles/StyleDashBoard.css";
import SideBarSaler from "../Layouts/sidebar/SideBarSaler";
import { ContentSaler } from "../Components/ContentSaler";

export const Saler = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="row">
          <SideBarSaler></SideBarSaler>
          <ContentSaler></ContentSaler>
        </div>
      </div>
    </>
  );
};
