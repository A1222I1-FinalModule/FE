import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import Payment from '../Components/Payment/Payment'
import Dashboard from '../Pages/DashBoard';
import ProductList from '../Components/product/ProductList'
export default function SalerRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/payment' element={<Dashboard><Payment></Payment></Dashboard>} />
            <Route path='/goods' element={<Dashboard><ProductList /></Dashboard>} />
            {/* <Route path='/payment' element={<Dashboard><Payment></Payment></Dashboard>} /> */}
            {/* <Route path='/statistical' element={<Dashboard><StatisticalTable /></Dashboard>} /> */}
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
        </Routes>
    );
};

