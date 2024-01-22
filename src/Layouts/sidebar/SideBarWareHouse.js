import React from 'react';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
import { Link } from 'react-router-dom';
export default function SideBarWareHouse() {
  return (
    <div className={`${style.sidebar} col-2 pe-0`}>
      <div className={style.sidebar_container}>
        <div className={style.list_item}>
          <div className={style.contain_item}>
            <Link to={"/warehouse/getInput"} className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Nhập liệu</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={style.contain_item}>
            <Link to={"/warehouse/statistical"} className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Thống Kê</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={style.contain_item}>
            <Link to="/sale/abc" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Hàng Trong Kho</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={style.contain_item}>
            <Link to="/sale/abc" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Thông Báo Mới</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
