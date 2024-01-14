import React from 'react';
import '../Assets/Styles/StyleDashBoard.css';
import Content from '../Components/Content';
import Header from '../Layouts/Header/Header';
import SideBar from '../Layouts/sidebar/SideBar';

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