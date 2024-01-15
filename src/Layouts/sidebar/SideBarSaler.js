import React from 'react';
import * as style from '../../Assets/Styles/StyleDashBoard.module.css';
export default function SideBarSaler() {
  return (
    <div class="sidebar col-2 pe-0">
      <div class="sidebar-container">
        <div class="list-item">
          <div class="contain_item">
            <a href="#" class="single_option">
              <div class="item-sidebar">
                <div class="item-title">
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Đây là sidebar cho saler</span>
                </div>
              </div>
            </a>
          </div>
          <div className="contain_item">
            <a href="#" className="single_option">
              <div className="item-sidebar">
                <div className="item-title">
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Thêm sản phẩm</span>
                </div>
              </div>
            </a>
          </div>
          <div className="contain_item">
            <a href="#" className="single_option">
              <div className="item-sidebar">
                <div className="item-title">
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Sửa sản phẩm</span>
                </div>
              </div>
            </a>
          </div>
          <div className="contain_item">
            <div className="item-sidebar dropdown">
              <div className="item-title">
                <ion-icon name="color-palette"></ion-icon>
                <span>Quản lý kho hàng</span>
              </div>
            </div>
            <div className="submenu">
              <ul className="dfsaf">
                <li>
                  <a href="#">Nguyen Van A</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contain_item">
            <div className="item-sidebar dropdown">
              <div className="item-title">
                <ion-icon name="school"></ion-icon>
                <span>Nhân viên bán hàng</span>
              </div>
            </div>
            <div className="submenu">
              <ul className="">
                <li>
                  <a href="#">Nguyen Van B</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contain_item">
            <div className="item-sidebar dropdown">
              <div className="item-title">
                <ion-icon name="trending-up"></ion-icon>
                <span>Thống kê</span>
              </div>
            </div>
            <div className="submenu">
              <ul className="">
                <li>
                  <a href="#">Nguyen Van E</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
