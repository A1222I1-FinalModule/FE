import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './privateRoute';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';
import Home from '../Pages/Home';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/login" element={<Login />} />
            <Route
                path="/private"
                element={
                    <PrivateRouter>
                        <></>
                    </PrivateRouter>
                }
            />
            <Route path="/" element={<Home></Home>} />
        </Routes>
    );
};

export default MainRouter;
