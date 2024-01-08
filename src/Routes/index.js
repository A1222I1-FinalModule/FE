import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Dashboard from "../Pages/DashBoard";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>
  );
};

export default MainRouter;
