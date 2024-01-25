import React from 'react';
import { Route, Routes } from 'react-router';
import Info from '../Components/Info/Info';
import Payment from '../Components/Payment'
import StatisticalTable from '../templates/MonthlyStatisticalTable';
import { Warehouse } from '../Pages/WareHouse';

const WarehouseRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Warehouse><Payment /></Warehouse>} />
            <Route path='/payment' element={<Warehouse><Payment /></Warehouse>} />
            <Route path='/statistical' element={<Warehouse><StatisticalTable /></Warehouse>} />
            <Route path='/info' element={<Warehouse><Info /></Warehouse>} />
        </Routes>
    );
};

export default WarehouseRoutes;