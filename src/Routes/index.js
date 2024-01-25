import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Home from '../Pages/Home';
import  Warehouse from '../Pages/WareHouse';
import AdminRoutes from './AdminRoutes';
import SalerRoutes from './SalerRoutes';
import { useEffect, useState } from "react";
import { useUser } from "../Services/UserContext";
import { jwtDecode } from 'jwt-decode';
import NotFound from "../Pages/NotFound";

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
      <Route path="/warehouse"
        element={roles.find((role) => role === "ROLE_WAREHOUSE") ? (<Warehouse />) : (<DefaultLayout>
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
        path="/home"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route path="*" element={<NotFound />}>

      </Route>
    </Routes>
  );
};
export default MainRouter;
