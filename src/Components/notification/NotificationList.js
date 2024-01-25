import React, { useEffect } from "react";
import { format } from "date-fns";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import styles from "./NotificationList.module.css";
import * as NotificationService from "../../Services/API/notification/NotificationService";
import { ModalNotification } from "./ModalNotification";
import { Modal } from "react-bootstrap";

export default function NotificationList() {
  const [isActive, setIsActive] = useState(false);
  const [countNotification, setCountNotification] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [notificationNotRead, setNotificationNotRead] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();


  console.log(modal);
  console.log(data);

  useEffect(() => {
    getAllBySaler();
  }, []);

  const getAllBySaler = async () => {
    let data = await NotificationService.getAllBySaler();
    setNotifications(data);
    let newArr = data.filter((item) => item.status === false);
    setNotificationNotRead(newArr);
    setCountNotification(newArr.length);
  };

  const getAllByNotReadSaler = () => {
    let arrNotRead = [...notificationNotRead];
    setNotificationNotRead(arrNotRead);
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


  const handleClose = () => setModal(false);

  const handleAll = () => {
    setToggle(true);
    getAllBySaler();
  };
  const handleNotRead = () => {
    setToggle(false);
  };

  const handleDelete = async (id) => {
    await NotificationService.deleteNotification(id);
    getAllBySaler();
  };

  const handleDeleteNotRead = async (id) => {
    await NotificationService.deleteNotification(id);
    getAllByNotReadSaler();
  };

  const handleFindById = async (id) => {
    setModal(true);
    let data = await NotificationService.findByid(id);
    setData(data);
  }


  const currentDate = format(new Date(), "dd-MM-yyyy");
  if (!notifications) return null;
  return (
    <>
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
                  className="btn btn-sm btn-outline-info text-lowercase fs-5 mt-3 "
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
                return (<div
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
                      <button
                        className={styles.contentlink}
                        onClick={() => {
                          handleFindById(notification.id);
                        }}
                      >
                        Chi tiết Thông báo
                      </button>
                      <button
                        className={styles.contentlink}
                        onClick={() => {
                          handleDelete(notification.id);
                          console.log(456);
                        }}
                      >
                        Gỡ thông báo
                      </button>
                    </div>
                  </div>
                </div>)
              })) : (notificationNotRead.map((notification) => {
                return (<div
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
                      <button
                        className={styles.contentlink}
                        onClick={() => {
                          // console.log(123); 
                          setModal(true);
                          handleFindById(notification.id);
                        }}
                      >
                        Chi tiết Thông báo
                      </button>
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
                </div>)
              }))}
            </div>
          </div>
        )}
      </div>
      {<Modal show={modal} onHide={handleClose} backdrop="static" keyboard={false} className={styles.modalcss}>
        <Modal.Header className={styles.contenttitle}>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.content}
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Đóng thông báo
          </button>
        </Modal.Footer>
      </Modal>}
    </>
  );
}
