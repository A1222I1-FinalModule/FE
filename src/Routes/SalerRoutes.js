import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import Payment from '../Components/Payment'
import Saler from '../Pages/Saler';
import StatisticalTable from '../templates/MonthlyStatisticalTable';

const SalerRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Saler><Payment /></Saler>} />
            <Route path='/payment' element={<Saler><Payment /></Saler>} />
            <Route path='/statistical' element={<Saler><StatisticalTable /></Saler>} />
            <Route path='/info' element={<Saler><Info /></Saler>} />
        </Routes>
    );
};

export default SalerRoutes;