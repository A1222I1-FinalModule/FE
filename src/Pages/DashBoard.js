import React from 'react';
import SideBar from '../Layouts/sidebar/SideBar';
import style from '../Assets/Styles/StyleDashBoard.module.css';
import Header from '../Layouts/Header/Header';
export default function Dashboard({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="row">
                <SideBar />
                <div className={style.content + ' col-10 ps-0'} style={{ height: "100vh" }}>
                    {children}
                </div>
            </div>
        </div>


    )
}
