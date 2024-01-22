import React from 'react';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
import { Link } from 'react-router-dom';
export default function SideBar() {
  return (
    <div className={`${style.sidebar} col-2 pe-0`}>
      <div className={style.sidebar_container}>
        <div className={style.list_item}>
          <div className={style.contain_item}>
            <a href="/admin/info" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Thông Tin Cá Nhân</span>
                </div>
              </div>
            </a>
          </div>
          <div className={style.contain_item}>
            <Link href="/admin/report" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Xem Báo Cáo</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={style.contain_item}>
            <a href="/admin/discount" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer"></ion-icon>
                  <span>Giảm Giá</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
