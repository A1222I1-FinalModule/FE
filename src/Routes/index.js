import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./privateRouter";
<<<<<<< HEAD
import NotificationList from "../Components/notification/NotificationList";
=======
import Login from "../Components/Login";
>>>>>>> 561224c38a8a89bbfc34537f8bc4b6089df7d802

const MainRouter = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/notification" element={<NotificationList />}></Route>
=======
      <Route path="/" element={<></>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/private" element={<PrivateRouter><></></PrivateRouter>}/>
>>>>>>> 561224c38a8a89bbfc34537f8bc4b6089df7d802
    </Routes>
  );
};

export default MainRouter;
