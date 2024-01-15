import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './privateRoute';
import Dashboard from '../Pages/DashBoard';
import { Saler } from '../Pages/Saler';
import { WareHouse } from '../Pages/WareHouse';
import Login from '../Components/Login';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/saler/dashboard" element={<Saler />}></Route>
            <Route path="/warehouse/dashboard" element={<WareHouse />}></Route>
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
