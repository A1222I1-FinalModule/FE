import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import Payment from '../Components/Payment/Payment'
import Warehouse from '../Pages/WareHouse';
import DailyTable from '../Components/StastisticalTable/DailyTable';
import MonthlyTable from '../Components/StastisticalTable/MonthlyTable';
import GetInput from '../Components/GetInput/GetInput';

const WarehouseRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<WarehouseRoutes><Info /></WarehouseRoutes>} />
            <Route path='/payment' element={<Warehouse><Payment /></Warehouse>} />
            <Route path='/daily' element={<Warehouse><DailyTable /></Warehouse>} />
            <Route path='/monthly' element={<Warehouse><MonthlyTable /></Warehouse>} />
            <Route path='/info' element={<Warehouse><Info /></Warehouse>} />
            <Route path='/getInput' element={<Warehouse><GetInput /></Warehouse>} />
        </Routes>
    );
};

export default WarehouseRoutes;