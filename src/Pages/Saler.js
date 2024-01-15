import { React, useState } from "react";
import Header from "../Layouts/Header/Header";
import SideBarSaler from "../Layouts/sidebar/SideBarSaler";
import { ContentSaler } from "../Components/ContentSaler";

export const Saler = () => {
  const [feature, setFeature] = useState('');
  return (
    <div>
      <Header></Header>
      <div className="row">
        <SideBarSaler setFeature={setFeature}></SideBarSaler>
        <ContentSaler feature={feature}></ContentSaler>
      </div>
    </div>
  );
};
