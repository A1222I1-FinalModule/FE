import React from "react";
import Header from "../Layouts/Header/Header";
import { ContentWareHouse } from "../Components/ContentWareHouse";
import SideBar from "../Layouts/sidebar/SideBar";

const Warehouse = () => {
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
export default Warehouse();