import React from "react";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import { Route, Routes } from "react-router";
import Payment from "./Payment";
export const ContentSaler = () => {
  return (
    <Routes>
      <Route path="/" element={<div className={style.content + " col-10 ps-0"}><Payment /></div>} />

    </Routes>
  );
};
