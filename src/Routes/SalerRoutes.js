import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import Payment from '../Components/Payment/Payment'
import StatisticalTable from '../templates/MonthlyStatisticalTable';
import Saler from '../Pages/Saler';
import Payment from '../Components/Payment'
import DailyTable from '../Components/StastisticalTable/DailyTable';
import MonthlyTable from '../Components/StastisticalTable/MonthlyTable';
export default function SalerRoutes() {
    return (
        <Routes>
            <Route path='/payment' element={<Saler><Payment></Payment></Saler>} />
            <Route path='/daily' element={<Saler><DailyTable /></Saler>} />
            <Route path='/monthly' element={<Saler><MonthlyTable /></Saler>} />
            <Route path='/info' element={<Saler><Info /></Saler>} />
        </Routes>
    );
};

