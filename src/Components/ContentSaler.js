import React from "react";
import { Route, Routes } from "react-router";
import Payment from "./Payment";
import StatisticalTable from "./StastisticalTable/StatisticalTable";
import ContentAdmin from "./ContentAdmin";
export const ContentSaler = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Payment />} />
      <Route path={"payment"} element={<Payment />} />
      <Route path={"statistical/*"} element={<StatisticalTable />} />
      <Route path="/abc" element={<ContentAdmin />} />
    </Routes>
  );
};