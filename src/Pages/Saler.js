import React from "react";
import Header from "../Layouts/Header/Header";
import * as style from '../Assets/Styles/StyleDashBoard.module.css';
import SideBarSaler from "../Layouts/sidebar/SideBarSaler";
import { ContentSaler } from "../Components/ContentSaler";
const Saler = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="row h-100">
          <SideBarSaler></SideBarSaler>
          <ContentSaler></ContentSaler>
        </div>
      </div>
    </>
  );
};

export default Saler;