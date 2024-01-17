import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import "react-toastify/dist/ReactToastify.css";
import NotificationSave from "../Components/notification/NotificationSave";
import NotificationList from "../Components/notification/NotificationList";
import NotificationWarehouse from "../Components/notification/NotificationWarehouse";
import React from 'react';
import PrivateRouter from './privateRoute.js';
import Dashboard from '../Pages/DashBoard';


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/notification" element={<NotificationList />}></Route>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/private"
        element={
          <PrivateRouter>
            <></>
          </PrivateRouter>
        }
      />
      <Route path="/notifications" element={<NotificationList />}></Route>{" "}
      <Route path="/notificationsave" element={<NotificationSave />}></Route>
      <Route
        path="/notificationWarehouse"
        element={<NotificationWarehouse />}
      ></Route>
    </Routes>

  );
};

export default MainRouter;
