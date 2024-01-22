import { React } from "react";
import Header from "../Layouts/Header/Header";
import SideBarSaler from "../Layouts/sidebar/SideBarSaler";
import { ContentSaler } from "../Components/ContentSaler";
export default function Saler({ userId }) {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <SideBarSaler></SideBarSaler>
        <ContentSaler userId={userId} />
      </div>
    </div>
  );
};
