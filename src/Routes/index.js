import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Login from "../Components/Login";
import InfoProductCreate from "./Components/product/InfoProductCreate";
import ProductList from "./Components/product/InfoProductCreate";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<></>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/private" element={<PrivateRouter><></></PrivateRouter>}/>
      {/* <Route path="/createInfo" element={<InfoProductCreate/>}/> */}
      <Route path="/listProduct" element={<ProductList/>}/>
    </Routes>
  );
};

export default MainRouter;
