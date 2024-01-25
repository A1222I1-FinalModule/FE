import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import  InfoCreate from '../Components/product/InfoProductCreate';
import Dashboard from '../Pages/DashBoard';
import ProductList from '../Components/product/ProductList'
const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/goods' element={<Dashboard><ProductList /></Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/infoCreate' element={<Dashboard><InfoCreate /></Dashboard>} />
        </Routes>
    );
};

export default DashboardRoutes;