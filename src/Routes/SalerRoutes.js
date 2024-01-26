import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
// import Payment from '../Components/Payment/Payment.js';
import StatisticalTable from '../templates/MonthlyStatisticalTable';
import Dashboard from '../Pages/DashBoard';
export default function SalerRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><Info /></Dashboard>} />
            {/* <Route path='/payment' element={<Dashboard><Payment></Payment></Dashboard>} /> */}
            <Route path='/statistical' element={<Dashboard><StatisticalTable /></Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
        </Routes>
    );
};
