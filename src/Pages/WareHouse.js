import React from "react";
import Header from "../Layouts/Header/Header";
import { ContentWareHouse } from "../Components/ContentWareHouse";
import SideBar from "../Layouts/sidebar/SideBar";

export default function Warehouse(){
  return (
    <>
      <div>
        <Header></Header>
        <div className="row">
          <SideBar></SideBar>
          <ContentWareHouse></ContentWareHouse>
        </div>
      </div>
    </>
  );
};
