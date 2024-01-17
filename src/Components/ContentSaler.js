import React from "react";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import { Route, Routes } from "react-router";
import Payment from "./Payment";
import StatisticalTable from "../templates/MonthlyStatisticalTable";
export const ContentSaler = () => {
  return (
    <Routes>
      <Route path="/" element={<div className={style.content + " col-10 ps-0"}><Payment /></div>} />
1      <Route path="/statistical" element={<div className={style.content + " col-10 ps-0"}><StatisticalTable /></div>} />

    </Routes>
  );
};
