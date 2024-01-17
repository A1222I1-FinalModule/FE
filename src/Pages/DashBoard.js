import React from 'react';
import SideBar from '../Layouts/sidebar/SideBar';
import ContentAdmin from '../Components/ContentAdmin';
import Info from '../Components/Info/Info';
import Header from '../Layouts/Header/Header';
import { Route, Routes } from 'react-router';
export default function AdminDashboard({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="row">
                <SideBar></SideBar>
                {children}
            </div>
        </div>

    )
}
