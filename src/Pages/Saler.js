import React from "react";
import Header from "../Layouts/Header/Header";
import SideBarSaler from "../Layouts/sidebar/SideBarSaler";
import { ContentSaler } from "../Components/ContentSaler";
const Saler = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="row">
          <SideBarSaler></SideBarSaler>
          <ContentSaler />
        </div>
      </div>
    </>
  );
};

export default Saler;