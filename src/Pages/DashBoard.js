import React from 'react';
import SideBar from '../Layouts/sidebar/SideBar';
import style from '../Assets/Styles/StyleDashBoard.module.css';
import Header from '../Layouts/Header/Header';
import { ToastContainer } from 'react-toastify';
// import style from '../assets/Styles/StyleDashBoard.module.css';
export default function Dashboard({ children }) {
    return (
        <div className={style.body}>
            <Header></Header>
            <div className="row">
                <SideBar />
                <div className={style.content + ' col-12 col-lg-10 col-md-8 ps-0'} style={{ height: "100vh" }}>
                    {children}
                </div>
                <ToastContainer />
            </div>
        </div>


    )
}
