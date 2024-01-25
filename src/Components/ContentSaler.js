import React from "react";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import { Route, Routes } from "react-router";
import Payment from "./Payment/Payment";
import ContentAdmin from "./ContentAdmin";
export const ContentSaler = () => {
  return (
    <Routes >
      <Route path="/">
        <Route index element={<div className={style.content + " col-10 ps-0"}><Payment /></div>} />
      </Route>
      <Route path="/abc" element={<ContentAdmin />} />
    </Routes>
  );
};