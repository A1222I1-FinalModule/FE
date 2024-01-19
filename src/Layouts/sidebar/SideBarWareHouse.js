import React from 'react';
<<<<<<< HEAD
import * as style from '../../Assets/Styles/StyleDashBoard.module.css';
export default function SideBarWareHouse(){
    return(
      <div class="sidebar col-2 pe-0">
         <div class="sidebar-container">
        <div class="list-item">
          <div class="contain_item">
                <a href="#" class="single_option">
                    <div class="item-sidebar">
                        <div class="item-title">
                          <ion-icon name="logo-buffer"></ion-icon>
                          <span>Đây là sidebar cho warehouse</span>
                        </div>
                    </div>
                </a>
          </div>
          <div class="contain_item">
                <a href="#" class="single_option">
                    <div class="item-sidebar">
                        <div class="item-title">
                          <ion-icon name="logo-buffer"></ion-icon>
                          <span>Thêm sản phẩm</span>
                        </div>
                    </div>
                </a>
          </div>
          <div class="contain_item">
                <a href="#" class="single_option">
                    <div class="item-sidebar">
                        <div class="item-title">
                          <ion-icon name="logo-buffer"></ion-icon>
                          <span>Sửa sản phẩm</span>
                        </div>
                    </div>
                </a>
          </div>
          <div class="contain_item">
                <div class="item-sidebar dropdown">
                  <div class="item-title">
                    <ion-icon name="color-palette"></ion-icon>
                    <span>Quản lý kho hàng</span>
                  </div>
=======
import style from '../../Assets/Styles/StyleDashBoard.module.css';
export default function SideBarWareHouse() {
  return (
    <div className={`${style.sidebar} col-2 pe-0`}>
      <div className={style.sidebar_container}>
        <div className={style.list_item}>
          <div className={style.contain_item}>
            <a href="/abc" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>saler</span>
>>>>>>> 4116d6cdec60bff358b10832c8643345110d973d
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 