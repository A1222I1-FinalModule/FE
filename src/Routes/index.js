import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import Dashboard from "../Pages/DashBoard";
import Login from "../Components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationSave from "../Components/notification/NotificationSave";
import NotificationList from "../Components/notification/NotificationList";
import NotificationWarehouse from "../Components/notification/NotificationWarehouse";

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
      {/*notificationsaler */}
      <Route path="/notificationsave" element={<NotificationSave />}></Route>
      <Route
        path="/notificationWarehouse"
        element={<NotificationWarehouse />}
      ></Route>
    </Routes>
  );
};

export default MainRouter;
