import React from "react";
import {Route, Routes} from "react-router-dom";
import Payment from "../Layouts/Main/Payment";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/payment" element={<Payment/>}></Route>
    </Routes>
  );
};

export default MainRouter;
