import React from 'react';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
export default function SideBar() {
  return (
    <div className={`${style.sidebar} col-2 pe-0`}>
      <div className={style.sidebar_container}>
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
  );
}
