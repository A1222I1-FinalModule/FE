import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
export default function
  SideBarSaler() {
  return (
    <div className={`${style.sidebar}  col-2 pe-0`}>
      <div className={style.sidebar_container}>
        <div className={style.list_item}>
          <div className={style.contain_item}>
            <Link to="" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Thanh Toán</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={style.contain_item}>
            <Link to="abc" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Thống Kê</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={style.contain_item}>
            <a href="/abc" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Hàng Trong Kho</span>
                </div>
              </div>
            </a>
          </div>
          <div className={style.contain_item}>
            <a href="/abc" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Thông Báo Mới</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 