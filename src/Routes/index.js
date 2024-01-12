import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Login from "../Components/Login";
import { CreateDiscount } from "../Components/Discount/createDiscount";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<></>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/private" element={<PrivateRouter><></></PrivateRouter>}/>
      <Route path="/createDiscount" element={<CreateDiscount/>}></Route>
    </Routes>
  
  );
};

export default MainRouter;
