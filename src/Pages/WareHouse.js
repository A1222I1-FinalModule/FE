import React from "react";
import Header from "../Layouts/Header/Header";
import { ContentWareHouse } from "../Components/ContentWareHouse";
import SideBar from "../Layouts/sidebar/SideBar";

export default function Warehouse({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <SideBar></SideBar>
        <div className="col-10 p-0">
          {children}
        </div>
      </div>
    </div>
  );
};
