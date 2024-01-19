import React from 'react';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
<<<<<<< HEAD
export default function SideBar(){
    return(
      <div className={`${style.sidebar} col-2 pe-0`}>
         <div className={style.sidebar_container}>
=======
export default function SideBar() {
  return (
    <div className={`${style.sidebar} col-2 pe-0`}>
      <div className={style.sidebar_container}>
>>>>>>> 4116d6cdec60bff358b10832c8643345110d973d
        <div className={style.list_item}>
          <div className={style.contain_item}>
            <a href="/abc" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Dashboard</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 