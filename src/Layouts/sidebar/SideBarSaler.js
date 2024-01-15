import React from 'react';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
export default function SideBarSaler({ setFeature }) {
  const handleStatistical = () => {
    setFeature('daily-statistical-table')
  }

  return (
    <div className={`${style.sidebar} col-2 pe-0`}>
      <div className={style.sidebar_container}>
        <div className={style.list_order}>
          <div className={style.contain_item}>
            <a href="#" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer" />
                  <span>Đây là sidebar cho saler</span>
                </div>
              </div>
            </a>
          </div>
          <div className={style.contain_item}>
            <a href="#" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer" />
                  <span>Thêm sản phẩm</span>
                </div>
              </div>
            </a>
          </div>
          <div className={style.contain_item}>
            <a href="#" className={style.single_option}>
              <div className={style.item_sidebar}>
                <div className={style.item_title}>
                  <ion-icon name="logo-buffer" />
                  <span>Sửa sản phẩm</span>
                </div>
              </div>
            </a>
          </div>
          <div className={style.contain_item}>
            <div className={`${style.item_sidebar} ${style.dropdown}`}>
              <div className={style.item_title}>
                <ion-icon name="color-palette" />
                <span onClick={handleStatistical()}>Thống kê</span>
              </div>
            </div>
            <div className={style.submenu}>
              <ul className={`dfsaf`}>
                <li>Theo ngày</li>
              </ul>
            </div>
            <div className={style.submenu}>
              <ul className={`dfsaf`}>
                <li>Theo tháng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}