import React, { useEffect } from "react";
import { format } from "date-fns";
import { useState } from "react";
import "./NotificationList.css";
import * as NotificationService from "../../Services/API/notification/NotificationService";

export default function NotificationList() {
  const [isActive, setIsActive] = useState(false);
  const [countNotification, setCountNotification] = useState(0);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getAllBySaler();
  }, []);

  const getAllBySaler = async () => {
    let data = await NotificationService.getAllBySaler();
    console.log(data);
    setNotifications(data);
  };
  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };
  const toggleElement = (id) => {
    var element = document.getElementById(`selection${id}`);
    console.log(id);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };

  const currentDate = format(new Date(), "dd-MM-yyyy");
  if (!notifications) return null;
  return (
    <>
      <body>
        <div className="content-right">
          <button
            className={`dropdown-btn ${isActive ? "active" : ""}`}
            onClick={handleDropdownClick}
          >
            <span className="material-icons">
              <i className="bi bi-bell-fill"></i>
            </span>
            <span className="icon-button_badge">{countNotification}</span>
            <div className="title-hide">
              <p className="title-show">Thông báo</p>
            </div>
          </button>
          {isActive && (
            <div className="dropdown-container">
              <div className="title-notification">
                <div className="content-title">Thông báo</div>
                <div className="button-notification d-flex flex-wrap gap-2 ">
                  <button className="btn btn-sm btn-outline-info text-lowercase fs-6 ">
                    Tất Cả
                  </button>
                  <button className="btn btn-sm btn-outline-info text-lowercase fs-6">
                    Chưa đọc
                  </button>
                </div>
              </div>
              <div className="content-body">
                {notifications.map((notification, index) => {
                  return (
                    <div className="content-notification" key={notification.id}>
                      <p className="content">{notification.content}</p>
                      <p className="date">{currentDate}</p>
                      <div
                        role="button"
                        className="threedots"
                        onClick={() => toggleElement(notification.id)}
                      >
                        <i className="bi bi-three-dots"></i>
                        <div
                          className="threedot-detail"
                          id={`selection${notification.id}`}
                        >
                          <a className="content-link" href="#">
                            Chi tiết Thông báo
                          </a>
                          <a className="content-link" href="#">
                            Gỡ thông báo
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </body>
    </>
  );
}
