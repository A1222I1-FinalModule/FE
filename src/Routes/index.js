import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/DashBoard";
import Login from "../Components/Login";
import InfoProductCreate from "../Components/product/InfoProductCreate";
import ProductList from "../Components/product/ProductList";
import PrivateRoute from "./privateRoute";
const MainRouter = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login />} />
      <Route
        path="/private"
        element={
          <PrivateRoute>
            <></>
          </PrivateRoute>
        }
      />
      <Route path="/createInfo" element={<InfoProductCreate />} />
      <Route path="/listProduct" element={<ProductList />} />
    </Routes>
  );
};

export default MainRouter;
