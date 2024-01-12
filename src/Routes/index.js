import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './privateRouter';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';

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
            <Route path="/" element={<></>} />
        </Routes>
    );
};

export default MainRouter;
