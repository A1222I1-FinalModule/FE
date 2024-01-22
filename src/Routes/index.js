import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';
import Payment from '../Components/Payment';
import { CreateDiscount } from '../Components/Discount/createDiscount';
import { ListCustomer } from '../Components/Customer/listCustomer';
import { Discount } from '../Components/Discount/listDiscount';
import { UpdateDiscount } from '../Components/Discount/updateDiscount';
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Home from '../Pages/Home';
import Saler from '../Pages/Saler';
import { Warehouse } from '../Pages/WareHouse';
import PrivateRoute from './privateRoute';
import Info from '../Components/Info/Info';
import AdminRoutes from './AdminRoutes';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/sale/*" element={<Saler />}></Route>
            <Route path="/warehouse/*" element={<Warehouse />}></Route>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                }
            />
            <Route
                path="/home"
                element={
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                }
            />


            <Route path="/createDiscount" element={<CreateDiscount />}></Route>
            <Route path="/updateDiscount/:id" element={<UpdateDiscount />}></Route>
            <Route path="/listCustomer" element={<ListCustomer />}></Route>
            <Route path="/listDiscount" element={<Discount />}></Route>
            <Route path="/info" element={<Info></Info>} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    );
};

export default MainRouter;
