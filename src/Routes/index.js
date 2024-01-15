import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './privateRoute';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';
import Home from '../Pages/Home';
import { CustomerCreate, CustomerUpdate } from '../Components/Customer';

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
            <Route path="/customer/create" element={<CustomerCreate></CustomerCreate>} />
            <Route path="/customer/update/:id" element={<CustomerUpdate></CustomerUpdate>} />
        </Routes>
    );
};

export default MainRouter;
