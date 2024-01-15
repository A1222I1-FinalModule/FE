import React from 'react';
import style from '../../Assets/Styles/StyleDashBoard.module.css'
export default function Header() {
  return (
    <div id={style.menu}>
      <div className={style.menu_left}>
        <div className={style.btn_nav}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className={style.menu_left_search}>
          <div className={style.border_input}>
            <div className={style.btn_look}>
              <ion-icon name="search"></ion-icon>
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </div>
      </div>
      <div className={style.menu_middle}>
        <div className={style.image}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1ItbLR9_1kVT-hdH_4HAcEb_E8eHVBAJWQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className={style.menu_right}>
        <div className={`${style.notification} ${style.active}`}>
          <ion-icon name="notifications-outline"></ion-icon>
        </div>
        <div className={style.account}>
          <div className={style.image_account}>
            <img
              src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <select name="account-name" id={style.account_name}>
            <option>Evan Morales</option>
            <option value="">Thông tin cá nhân</option>
            <option value="">Đổi mật khẩu</option>
          </select>
        </div>
        <div className={style.edit_option}>
          <div className={style.border_edit_option}>
            <ion-icon name="code-working"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
