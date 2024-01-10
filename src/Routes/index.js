import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import NotificationList from "../Components/notification/NotificationList";
import Login from "../Components/Login";
import NotificationSave from "../Components/notification/NotificationSave";

const MainRouter = () => {
  return (
    <Routes>
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
      <Route path="/notifications" element={<NotificationList />}></Route>
      <Route path="/notificationsave" element={<NotificationSave />}></Route>
    </Routes>
  );
};

export default MainRouter;
