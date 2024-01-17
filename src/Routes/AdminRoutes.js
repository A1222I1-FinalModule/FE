import React from 'react';
import { Route, Routes } from 'react-router';
import Dashboard from '../Pages/DashBoard';
import Info from '../Components/Info/Info';
import ContentAdmin from '../Components/ContentAdmin';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><ContentAdmin /></Dashboard>} />
            <Route path='info' element={<Dashboard><Info /></Dashboard>} />

        </Routes>
    );
};

export default AdminRoutes;