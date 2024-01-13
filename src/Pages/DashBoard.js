import React from 'react';
import SideBar from '../Layouts/sidebar/SideBar';
import Content from '../Components/Content';
import Header from '../Layouts/Header/Header';
import style from '../assets/Styles/StyleDashBoard.module.css';
export default function Dashboard(){
    return(
        <div>
            <Header></Header>
            <div className="row">
                <SideBar></SideBar>
                <Content></Content>
            </div>            
        </div>
        
    )
}