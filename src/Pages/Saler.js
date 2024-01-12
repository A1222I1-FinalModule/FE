import React from "react";
import "../Assets/Styles/StyleDashBoard.css";
import { ContentSaler } from "../Components/ContentSaler";
import Header from "../Layouts/Header/Header";
import SideBarSaler from "../Layouts/sidebar/SideBarSaler";

export const Saler = () => {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <SideBarSaler></SideBarSaler>
        <ContentSaler></ContentSaler>
      </div>
    </div>
  );
};
