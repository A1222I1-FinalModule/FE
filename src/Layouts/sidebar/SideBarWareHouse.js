import React from 'react';
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
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={style.contain_item}>
          <a href="#" className={style.single_option}>
            <div className={style.item_sidebar}>
              <div className={style.item_title}>
                <ion-icon name="logo-buffer">
                  <span>Thêm sản phẩm</span>
                </ion-icon></div>
            </div>
          </a>
        </div>
        <div className={style.contain_item}>
          <a href="#" className={style.single_option}>
            <div className={style.item_sidebar}>
              <div className={style.item_title}>
                <ion-icon name="logo-buffer">
                  <span>Sửa sản phẩm</span>
                </ion-icon></div>
            </div>
          </a>
        </div>
        <div className={style.contain_item}>
          <div className={`${style.item_sidebar} ${style.dropdown}`}>
            <div className={style.item_title}>
              <ion-icon name="color-palette">
                <span>Quản lý kho hàng</span>
              </ion-icon></div>
          </div>
          <div className={style.submenu}>
            <ul className={`dfsaf`}>
              <li><a href="#">Nguyen Van A</a></li>
            </ul>
          </div>
        </div>
        <div className={style.contain_item}>
          <div className={`${style.item_sidebar} ${style.dropdown}`}>
            <div className={style.item_title}>
              <ion-icon name="school">
                <span>Nhân viên bán hàng</span>
              </ion-icon></div>
          </div>
          <div className={style.submenu}>
            <ul className={`dfsaf`}>
              <li><a href="#">Nguyen Van B</a></li>
            </ul>
          </div>
        </div>
        <div className={style.contain_item}>
          <div className={`${style.item_sidebar} ${style.dropdown}`}>
            <div className={style.item_title}>
              <ion-icon name="trending-up">
                <span>Thống kê</span>
              </ion-icon></div>
          </div>
          <div className={style.submenu}>
            <ul className={`dfsaf`}>
              <li><a href="#">Nguyen Van E</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}
