import { React } from "react";
import Header from "../Layouts/Header/Header";
import { ContentSaler } from "../Components/ContentSaler";
import SideBar from "../Layouts/sidebar/SideBar";

const Saler = () => {
  return (
    <>
      <div>
        <Header></Header>
        <div className="row">
          <SideBar></SideBar>
          <ContentSaler/>
        </div>
      </div>
    </>
  );
};
export default Saler();
