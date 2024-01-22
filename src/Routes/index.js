import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';
import DefaultLayout from '../Layouts/DefaultLayout';
import Home from '../Pages/Home';
import PrivateRoute from './privateRoute';
import Payment from '../Components/Payment';
import { CustomerCreate, CustomerUpdate } from '../Components/Customer';
import ListProduct from '../Pages/ListProduct';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/login" element={<Login />} />
            <Route
                path="/private"
                element={
                    <PrivateRoute>
                        <></>
                    </PrivateRoute>
                }
            />
            <Route
                path="/"
                element={
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                }
            />
            <Route path="/customer/create" element={<CustomerCreate />} />
            <Route path="/customer/update/:id" element={<CustomerUpdate />} />
            <Route path="/list-product" element={<ListProduct />} />
        </Routes>
    );
};

export default MainRouter;
