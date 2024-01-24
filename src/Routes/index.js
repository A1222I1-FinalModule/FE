import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';
import { CreateDiscount } from '../Components/Discount/createDiscount';
import { ListCustomer } from '../Components/Customer/listCustomer';
import { Discount } from '../Components/Discount/listDiscount';
import { UpdateDiscount } from '../Components/Discount/updateDiscount';         
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Home from '../Pages/Home';
import PrivateRoute from './privateRoute';
import Saler  from '../Pages/Saler';
import  Warehouse  from '../Pages/WareHouse';

const MainRouter = () => {
    return (
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/sale/dashboard" element={<Saler />} />
          <Route path="/warehouse/dashboard" element={<Warehouse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createDiscount" element={<CreateDiscount />} />
          <Route path="/updateDiscount/:id" element={<UpdateDiscount />} />
          <Route path="/listCustomer" element={<ListCustomer />} />
          <Route path="/listDiscount" element={<Discount />} />
    
          {/* PrivateRoute should come before the catch-all route */}
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <></>
              </PrivateRoute>
            }
          />
    
          {/* DefaultLayout routes */}
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
    
          {/* Catch-all route should be at the end */}
          <Route path="/*" element={<></>} />
        </Routes>
      );
};

export default MainRouter;
