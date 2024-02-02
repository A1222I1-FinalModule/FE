import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Home from '../Pages/Home';
import News from '../Pages/News';
import AdminRoutes from './AdminRoutes';
import SalerRoutes from './SalerRoutes';
import { useEffect, useState } from "react";
import NotFound from "../Pages/NotFound";
import WarehouseRoutes from './WarehouseRoutes';
import ListProduct from '../Pages/ListProduct'
import ProductMale from '../Pages/ProductMale'
import ProductFemale from '../Pages/ProductFemale'
import { useSelector } from 'react-redux';
const MainRouter = () => {
  const roles = useSelector(store => store.users.role);
  console.log(roles);
  if (roles.length === 0) {
    roles.push("none");
  }
  return (
    <Routes>
      <Route path="/admin/*" element={roles.find((role) => role === "ROLE_ADMIN") ? (<AdminRoutes />) : (<Navigate to={"/"} />)} />
      <Route path="/sale/*"
        element={roles.find((role) => role === "ROLE_SALE") ? (<SalerRoutes />) : (<Navigate to={"/"} />)}></Route>
      <Route path="/warehouse/*"
        element={roles.find((role) => role === "ROLE_WAREHOUSE") ? (<WarehouseRoutes />) : (<Navigate to={"/"} />)}></Route>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />

      <Route
        path="/search"
        element={
          <DefaultLayout>
            <ListProduct />
          </DefaultLayout>
        }
      />

      <Route
        path="/nam"
        element={
          <DefaultLayout>
            <ProductMale />
          </DefaultLayout>
        }
      />

      <Route
        path="/nu"
        element={
          <DefaultLayout>
            <ProductFemale />
          </DefaultLayout>
        }
      />

      <Route
        path="/tin-tuc"
        element={
          <DefaultLayout>
            <News />
          </DefaultLayout>
        }
      />
      <Route path="*" element={<NotFound />}>
      </Route>
    </Routes>

  );
}
export default MainRouter;
