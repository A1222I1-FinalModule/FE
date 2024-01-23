import React, { useEffect } from "react";
import { format } from "date-fns";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import styles from "./NotificationList.module.css";
import * as NotificationService from "../../Services/API/notification/NotificationService";

export default function NotificationWarehouse() {
  const [isActive, setIsActive] = useState(false);
  const [countNotification, setCountNotification] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [notificationNotRead, setNotifficationNotRead] = useState([]);
  const [toggle, setToggle] = useState(true);


  console.log(notifications);
  console.log(notificationNotRead);
  useEffect(() => {
    getAllByWarehouse();
  }, []);

  const getAllByWarehouse = async () => {
    let data = await NotificationService.getAllByWarehouse();
    setNotifications(data);
    let newArr = data.filter((item) => item.status === false);
    setNotifficationNotRead(newArr);
    setCountNotification(newArr.length);
  };

  const getAllNotRead = async () => {
    let arrNotRead = [...notificationNotRead];
    setNotifficationNotRead(arrNotRead);
  };
  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };
  const toggleElement = (id) => {
    var element = document.getElementById(`selection${id}`);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };

  const handleAll = () => {
    setToggle(true);
    getAllByWarehouse();
  };
  const handleNotRead = () => {
    setToggle(false);
  };
  const handleDelete = async (id) => {
    await NotificationService.deleteNotification(id);
    getAllByWarehouse();
  };
  const handleDeleteNotRead = async (id) => {
    await NotificationService.deleteNotification(id);
    getAllNotRead();
  };

  const currentDate = format(new Date(), "dd-MM-yyyy");
  if (!notifications) return null;
  return (
    <>
      <body>
        <div className={styles.contentright}>
          <button
            className={`${styles.dropdownbtn} ${isActive ? styles.active : ""}`}
            onClick={handleDropdownClick}
          >
            <span className="material-icons">
              <FontAwesomeIcon
                icon={faBell}
                className={styles.bibellfill}
              ></FontAwesomeIcon>
            </span>
            <span className={styles.iconbutton_badge}>{countNotification}</span>
            <div className={styles.titlehide}>
              <p className={styles.titleshow}>Thông báo</p>
            </div>
          </button>
          {isActive && (
            <div className={styles.dropdowncontainer}>
              <div className={styles.titlenotification}>
                <div className={styles.contenttitle}>Thông báo</div>
                <div className="button-notification d-flex flex-wrap gap-2 ">
                  <button
                    className="btn btn-sm btn-outline-info text-lowercase fs-5 mt-3"
                    onClick={() => {
                      handleAll();
                    }}
                  >
                    Tất Cả
                  </button>
                  <button
                    className="btn btn-sm btn-outline-info text-lowercase fs-5 mt-3"
                    onClick={() => {
                      handleNotRead();
                    }}
                  >
                    Chưa đọc
                  </button>
                </div>
              </div>
              <div className={styles.contentbody}>
                {toggle ? (notifications.map((notification, index) => {
                  return (
                    <div
                      className={styles.contentnotification}
                      key={notification.id}
                    >
                      <p className={styles.content1}>
                        {notification.content}
                      </p>
                      <p className={styles.date}>{currentDate}</p>
                      <div
                        role="button"
                        className={styles.threedots}
                        onClick={() => toggleElement(notification.id)}
                      >
                        <FontAwesomeIcon
                          icon={faEllipsis}
                          className={styles.bithreedots}
                        />
                        <div
                          className={styles.threedotdetail}
                          id={`selection${notification.id}`}
                        >
                          <a className={styles.contentlink} href="#">
                            Chi tiết Thông báo
                          </a>
                          <button
                            className={styles.contentlink}
                            onClick={() => {
                              handleDelete(notification.id);
                            }}
                          >
                            Gỡ thông báo
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })) : (notificationNotRead.map((notification, index) => {
                  return (
                    <div
                      className={styles.contentnotification}
                      key={notification.id}
                    >
                      <p className={styles.content1}>
                        {notification.content}
                      </p>
                      <p className={styles.date}>{currentDate}</p>
                      <div
                        role="button"
                        className={styles.threedots}
                        onClick={() => toggleElement(notification.id)}
                      >
                        <FontAwesomeIcon
                          icon={faEllipsis}
                          className={styles.bithreedots}
                        />
                        <div
                          className={styles.threedotdetail}
                          id={`selection${notification.id}`}
                        >
                          <a className={styles.contentlink} href="#">
                            Chi tiết Thông báo
                          </a>
                          <button
                            className={styles.contentlink}
                            onClick={() => {
                              handleDeleteNotRead(notification.id);
                            }}
                          >
                            Gỡ thông báo
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                }))}
              </div>
            </div>
          )}
        </div>
      </body>
    </>
  );
}
