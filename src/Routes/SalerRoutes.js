import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import Payment from '../Components/Payment/Payment'
import StatisticalTable from '../templates/MonthlyStatisticalTable';
import Dashboard from '../Pages/DashBoard';
export default function SalerRoutes() {
    return (
<<<<<<< HEAD
        <Routes>       
            <Route path='/statistical' element={<Saler><StatisticalTable /></Saler>} />
            <Route path='/info' element={<Saler><Info /></Saler>} />
            <Route path='/payment' element={<Saler><Payment /></Saler>} />
=======
        <Routes>
            <Route path='/' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/payment' element={<Dashboard><Payment></Payment></Dashboard>} />
            <Route path='/statistical' element={<Dashboard><StatisticalTable /></Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
>>>>>>> 42e7896ef8e554450c65f2ea93961999591fb29e
        </Routes>
    );
};

