import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './privateRoute';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';
import Payment from '../Components/Payment';
import { Toaster } from 'react-hot-toast';
import { CreateDiscount } from '../Components/Discount/createDiscount';
import { ListCustomer } from '../Components/Customer/listCustomer';
import { Discount } from '../Components/Discount/listDiscount';
import { UpdateDiscount } from '../Components/Discount/updateDiscount';         
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Home from '../Pages/Home';
import PrivateRoute from './privateRoute';
import Payment from "../Components/Payment"
import { Saler } from '../Pages/Saler';
import { Warehouse } from '../Pages/WareHouse';

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/sale/dashboard" element={<Saler />}></Route>
            <Route path="/warehouse/dashboard" element={<Warehouse />}></Route>
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
                <Route path="/" element={<></>} />
<<<<<<< HEAD
                <Route path="/payment" element={<Payment />} />
            </Routes>
                <Toaster position="top-right" reverseOrder={false} />;
        </>
=======
            <Route path="/payment" element={<Payment />} />
        </Routes>
>>>>>>> 4116d6cdec60bff358b10832c8643345110d973d
    );
};

export default MainRouter;
