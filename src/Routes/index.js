import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Dashboard from "../Pages/DashBoard";
import Login from "../Components/Login";
import { CreateDiscount } from "../Components/Discount/createDiscount";
import { ListCustomer } from "../Components/Customer/listCustomer";
import { Discount } from "../Components/Discount/listDiscount";
import { UpdateDiscount } from "../Components/Discount/updateDiscount";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>      
      <Route path="/login" element={<Login/>}/>
      <Route path="/private" element={<PrivateRouter><></></PrivateRouter>}/>
      <Route path="/createDiscount" element={<CreateDiscount/>}></Route>
      <Route path="/updateDiscount/:id" element={<UpdateDiscount/>}></Route>
      <Route path="/listCustomer" element={<ListCustomer/>}></Route>
      <Route path="/listDiscount" element={<Discount/>}></Route>
      <Route path="/" element={<></>}/>
    </Routes>
  );
};

export default MainRouter;
