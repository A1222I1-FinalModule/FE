import React from "react";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import { Route, Routes } from "react-router";
import Payment from "./Payment/Payment";
import ContentAdmin from "./ContentAdmin";
export const ContentSaler = () => {
  return (
    <>
      <div className={style.content + " col-10 ps-0"}>
        <div className={style.content_main}>
          <span>Nội dung chức năng cho Saler</span>
        </div>
      </div>
    </>
  );
};