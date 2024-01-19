import React from "react";
import { Route, Routes } from "react-router";
import Payment from "./Payment";
import StatisticalTable from "./StastisticalTable/StatisticalTable";
export const ContentSaler = () => {
  return (
    <Routes>
      <Route path={"*"} element={<StatisticalTable />} />
      <Route path={"payment"} element={<Payment />} />
      <Route path={"statistical/*"} element={<StatisticalTable />} />
    </Routes>
  );
};
