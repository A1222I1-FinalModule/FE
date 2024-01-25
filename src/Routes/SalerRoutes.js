import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import StatisticalTable from '../templates/MonthlyStatisticalTable';
import Saler from '../Pages/Saler';
import Payment from '../Components/Payment'
export default function SalerRoutes() {
    return (
        <Routes>       
            <Route path='/payment' element={<Saler><Payment></Payment></Saler>} />
            <Route path='/statistical' element={<Saler><StatisticalTable /></Saler>} />
            <Route path='/info' element={<Saler><Info /></Saler>} />
        </Routes>
    );
};
