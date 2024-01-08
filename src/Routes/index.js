import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
import NotificationList from "../Components/notification/NotificationList";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/notification" element={<NotificationList />}></Route>
    </Routes>
  );
};

export default MainRouter;
