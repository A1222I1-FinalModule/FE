import React from "react";

import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Login from "../Components/Login";
import Payment from "../Components/Payment";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/" element={<></>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/private" element={<PrivateRouter><></></PrivateRouter>}/>
    </Routes>
  );
};

export default MainRouter;
