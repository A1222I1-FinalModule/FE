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
            <Route path='/*' element={<Warehouse><Payment /></Warehouse>} />
            <Route path='/payment' element={<Warehouse><Payment /></Warehouse>} />
            <Route path='/daily' element={<Warehouse><DailyTable /></Warehouse>} />
            <Route path='/monthly' element={<Warehouse><MonthlyTable /></Warehouse>} />
            <Route path='/info' element={<Warehouse><Info /></Warehouse>} />
            <Route path='/getInput' element={<Warehouse><GetInput /></Warehouse>} />
            <Route path='/' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/goods' element={<Dashboard><ProductList /></Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/productCreate' element={<Dashboard><InfoCreate /></Dashboard>} />
        </Routes>
    );
};

export default WarehouseRoutes;