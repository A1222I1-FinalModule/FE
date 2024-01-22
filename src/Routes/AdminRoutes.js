import React from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from '../Pages/DashBoard';
import Info from '../Components/Info/Info';
import ContentAdmin from '../Components/ContentAdmin';
import SideBar from '../Layouts/sidebar/SideBar';
import { Discount } from '../Components/Discount/listDiscount';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><ContentAdmin /></Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/discount' element={<Dashboard><Discount /></Dashboard>} />




        </Routes>
    );
};

export default AdminRoutes;