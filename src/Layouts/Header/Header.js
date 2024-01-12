import React from 'react';

export default function Header() {
  return (
    <div id="menu">
      <div className="menu_left">
        <div className="btn-nav">
          <ion-icon name="menu" />
        </div>
        <div className="menu_left_search">
          <div className="border_input">
            <div className="btn_look">
              <ion-icon name="search" />
            </div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
        </div>
      </div>
      <div className="menu_middle">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1ItbLR9_1kVT-hdH_4HAcEb_E8eHVBAJWQ&usqp=CAU" alt="" />
        </div>
      </div>
      <div className="menu_right">
        <div className="notifacation active">
          <ion-icon name="notifications-outline" />
        </div>
        <div className="account">
          <div className="image_account">
            <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <select name="account-name" id="account_name">
            <option>Evan Morales</option>
            <option value>Thông tin cá nhân</option>
            <option value>Đổi mật khẩu</option>
          </select>
        </div>
        <div className="edit_option">
          <div className="border_edit_option">
            <ion-icon name="code-working" />
          </div>
        </div>
      </div>
    </div>

  )
}
