import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Login from "../Components/Login";
import Dashboard from "../Pages/DashBoard";

const MainRouter = () => {
  return (
    <Routes>  
      <Route path="/login" element={<Login/>}/>
      <Route path="/private" element={<PrivateRouter><></></PrivateRouter>}/>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/" element={<></>}/>
    </Routes>
  );
};

export default MainRouter;
