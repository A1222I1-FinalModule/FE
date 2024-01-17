import React from "react";
import { Route, Routes } from "react-router";
import Payment from "./Payment";
import StatisticalTable from "../templates/MonthlyStatisticalTable";
import Saler from "../Pages/Saler";
export const ContentSaler = () => {
  return (
    <Routes>
      <Route path="/sale" element={<Saler><Payment /></Saler>} />
      <Route path="/sale/payment" element={<Saler><Payment /></Saler>} />
      <Route path="/sale/statistical" element={<Saler><StatisticalTable /></Saler>} />

    </Routes>
  );
};
