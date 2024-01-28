import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Home from '../Pages/Home';
import AdminRoutes from './AdminRoutes';
import SalerRoutes from './SalerRoutes';
import { useEffect, useState } from "react";
import { useUser } from "../Services/UserContext";
import { jwtDecode } from 'jwt-decode';
import NotFound from "../Pages/NotFound";
import WarehouseRoutes from './WarehouseRoutes';
import ListProduct from '../Pages/ListProduct'
import ProductMale from '../Pages/ProductMale'
import ProductFemale from '../Pages/ProductFemale'
const MainRouter = () => {
  const [roles, setRoles] = useState([]);
  const user = useUser();
  function getRolesFromJWT() {
    if (user.jwt) {
      const decodedJwt = jwtDecode(user.jwt);
      return decodedJwt.authorities;
    }
    return [];
  }
  useEffect(() => {
    setRoles(getRolesFromJWT());
  }, [user.jwt]);
  console.log(roles);
  return (
    <Routes>
      <Route path="/admin/*" element={roles.find((role) => role === "ROLE_ADMIN") ? (<AdminRoutes />) : (<DefaultLayout>
        <Home />
      </DefaultLayout>)} />
      <Route path="/sale/*"
        element={roles.find((role) => role === "ROLE_SALE") ? (<SalerRoutes />) : (<DefaultLayout>
          <Home />
        </DefaultLayout>)}></Route>
      <Route path="/warehouse/*"
        element={roles.find((role) => role === "ROLE_WAREHOUSE") ? (<WarehouseRoutes />) : (<DefaultLayout>
          <Home />
        </DefaultLayout>)}></Route>
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
      <Route path="*" element={<NotFound />}>

      </Route>
    </Routes>

  );
}
export default MainRouter;
