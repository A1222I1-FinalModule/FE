import React from 'react';
import SideBar from '../Layouts/sidebar/SideBar';
import style from '../Assets/Styles/StyleDashBoard.module.css';
// import Header from '../Layouts/Header/Header';
import Header from '../Layouts/components/Header'
import Footer from '../Layouts/components/Footer'
export default function Dashboard({ children }) {
    return (
        <div>
            <Header hideSearch={false}></Header>
            <div className="row" style={{ marginTop: '80px' }}>
                <SideBar />
                <div className={style.content + ' col-10 ps-0'} style={{ height: "100vh" }}>
                    {children}

                </div>
            </div>
            <Footer />
        </div>


    )
}
