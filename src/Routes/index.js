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

const MainRouter = () => {
    return (
        <>
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
                <Route path="/createDiscount" element={<CreateDiscount />}></Route>
                <Route path="/updateDiscount/:id" element={<UpdateDiscount />}></Route>
                <Route path="/listCustomer" element={<ListCustomer />}></Route>
                <Route path="/listDiscount" element={<Discount />}></Route>
                <Route path="/" element={<></>} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
                <Toaster position="top-right" reverseOrder={false} />;
        </>
    );
};

export default MainRouter;
