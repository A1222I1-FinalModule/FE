import React, { useEffect, useState } from 'react';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function SideBar() {
  const roles = useSelector(store => store.users.role);
  const renderingSideBar = () => {
    if (Array.isArray(roles)) {
      if (roles.includes('ROLE_ADMIN')) {
        console.log(`Role: ${roles}`)
        return (
          <>
            <div className={style.contain_item}>
              <Link to="/admin/info" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Thông Tin Cá Nhân</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/admin/goods" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Hàng Trong Kho</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/admin/productCreate" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Thêm mới thông tin sản phẩm</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/admin/report" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Xem Báo Cáo</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/admin/discount" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Giảm Giá</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/admin/customer" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Khách Hàng</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/admin/notification" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Đăng Thông Báo</span>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      } else if (roles.includes('ROLE_SALE')) {
        return (
          <>
            <div className={style.contain_item}>
              <Link to="/sale/info" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Thông Tin Cá Nhân</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/sale/payment" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Thanh Toán</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/sale/daily" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Thống Kê</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/sale/goods" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Hàng Trong Kho</span>
                  </div>
                </div>
              </Link>
            </div>

          </>
        );
      } else if (roles.includes('ROLE_WAREHOUSE')) {
        console.log(`Role: ${roles}`)
        return (
          <>
            <div className={style.list_item}>
              <div className={style.contain_item}>
                <a href="/warehouse/info" className={style.single_option}>
                  <div className={style.item_sidebar}>
                    <div className={style.item_title}>
                      <ion-icon name="logo-buffer"></ion-icon>
                      <span>Thông tin cá nhân</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={style.contain_item}>
              <Link to="/warehouse/goods" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Hàng Trong Kho</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/warehouse/daily" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Thống kê</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/warehouse/infoCreate" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Thêm mới thông tin sản phẩm</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className={style.contain_item}>
              <Link to="/warehouse/getInput" className={style.single_option}>
                <div className={style.item_sidebar}>
                  <div className={style.item_title}>
                    <ion-icon name="logo-buffer"></ion-icon>
                    <span>Nhập hàng</span>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      }
    }
  }
  return (
    <>
      <div className={`${style.sidebar} col col-lg-2 col-md-4 col-0 pe-0`}>
        <div className={style.sidebar_container}>
          {renderingSideBar()}
        </div>
      </div>

    </>
  );
}
