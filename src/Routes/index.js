import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Dashboard from "../Pages/DashBoard";
import Login from "../Components/Login";
import { CreateDiscount } from "../Components/Discount/createDiscount";
import { ListCustomer } from "../Components/Customer/listCustomer";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>      
      <Route path="/login" element={<Login/>}/>
      <Route path="/private" element={<PrivateRouter><></></PrivateRouter>}/>
      <Route path="/createDiscount" element={<CreateDiscount/>}></Route>
      <Route path="/listCustomer" element={<ListCustomer/>}></Route>
      <Route path="/" element={<></>}/>
    </Routes>
  );
};

export default MainRouter;
