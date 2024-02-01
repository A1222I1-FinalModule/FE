import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Components/Login';
import Payment from '../Components/Payment';
import { CreateDiscount } from '../Components/Discount/createDiscount';
import { ListCustomer } from '../Components/Customer/listCustomer';
import { Discount } from '../Components/Discount/listDiscount';
import { Toaster } from 'react-hot-toast';
import { UpdateDiscount } from '../Components/Discount/updateDiscount';
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Home from '../Pages/Home';
import News from '../Pages/News';
import { Warehouse } from '../Pages/WareHouse';
import AdminRoutes from './AdminRoutes';
import SalerRoutes from './SalerRoutes';
import ListProduct from '../Pages/ListProduct'
import ProductMale from '../Pages/ProductMale'
import ProductFemale from '../Pages/ProductFemale'


const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/sale/*" element={<SalerRoutes />}></Route>
        <Route path="/warehouse" element={<Warehouse />}></Route>
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
          path="/search"
          element={
            <DefaultLayout>
              <ListProduct />
            </DefaultLayout>
          }
        />

        <Route
          path="/nam"
          element={
            <DefaultLayout>
              <ProductMale />
            </DefaultLayout>
          }
        />

        <Route
          path="/nu"
          element={
            <DefaultLayout>
              <ProductFemale />
            </DefaultLayout>
          }
        />

        <Route
          path="/tin-tuc"
          element={
            <DefaultLayout>
              <News />
            </DefaultLayout>
          }
        />

        <Route path="/createDiscount" element={<CreateDiscount />}></Route>
        <Route path="/updateDiscount/:id" element={<UpdateDiscount />}></Route>
        <Route path="/listCustomer" element={<ListCustomer />}></Route>
        <Route path="/listDiscount" element={<Discount />}></Route>
        <Route path="/" element={<></>} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default MainRouter;
