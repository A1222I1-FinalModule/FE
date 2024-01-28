import React from 'react';
import SideBar from '../Layouts/sidebar/SideBar';
import style from '../Assets/Styles/StyleDashBoard.module.css';
import Header from '../Layouts/components/Header'
import Footer from '../Layouts/components/Footer'
import { ToastContainer } from 'react-toastify';
export default function Dashboard({ children }) {
    return (
        <div>
            <Header hideSearch={false}></Header>
            <div className="row" style={{ marginTop: '80px' }}>
                <SideBar />
                <div className={style.content + ' col-12 col-lg-10 col-md-8 ps-0'} >
                    {children}
                </div>
                <ToastContainer />
            </div>
            <Footer />
        </div>


    )
}
