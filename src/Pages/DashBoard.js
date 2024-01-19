import React from 'react';
import SideBar from '../Layouts/sidebar/SideBar';
import Content from '../Components/Content';
import Header from '../Layouts/Header/Header';
import style from '../Assets/Styles/StyleDashBoard.module.css';
<<<<<<< HEAD
export default function Dashboard(){
    return(
=======
export default function Dashboard() {
    return (
>>>>>>> 4116d6cdec60bff358b10832c8643345110d973d
        <div>
            <Header></Header>
            <div className="row">
                <SideBar></SideBar>
                <Content></Content>
            </div>
        </div>

    )
}