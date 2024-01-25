import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/DashBoard';
import Login from '../Components/Login';
import DefaultLayout from '../Layouts/DefaultLayout';
import Home from '../Pages/Home';
import PrivateRoute from './privateRoute';
import { CustomerCreate, CustomerUpdate } from '../Components/Customer';
import ListProduct from '../Pages/ListProduct';
import News from '../Pages/News';
import ProductMale from '../Pages/ProductMale';
import ProductFemale from '../Pages/ProductFemale';

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
            <Route
                path="/search"
                element={
                    <DefaultLayout>
                        <ListProduct />
                    </DefaultLayout>
                }
            />

            <Route
                path="/news"
                element={
                    <DefaultLayout>
                        <News />
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

            <Route path="/customer/create" element={<CustomerCreate />} />
            <Route path="/customer/update/:id" element={<CustomerUpdate />} />
        </Routes>
    );
};

export default MainRouter;
