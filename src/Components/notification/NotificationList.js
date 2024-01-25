import React, { useEffect } from "react";
import { format } from "date-fns";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import styles from "./NotificationList.module.css";
import * as NotificationService from "../../Services/API/notification/NotificationService";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NotificationDelete } from "./NotificationDelete";

export default function NotificationList() {
  const [isActive, setIsActive] = useState(false);
  const [countNotification, setCountNotification] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [notificationNotRead, setNotificationNotRead] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();

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


  const getDelete = async (id) => {
    await NotificationService.deleteNotification(id);
    await getAllBySaler();
  }

  const getDeleteNotRead = async (id) => {
    await NotificationService.deleteNotification(id);
    getAllByNotReadSaler();
  }
  const handleDelete = async (id) => {
    getDelete(id).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  };

  const handleDeleteNotRead = async (id) => {
    getDeleteNotRead(id).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
  }
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
                  className="btn btn-sm btn-outline-info  fs-5 mt-3 "
                  onClick={() => {
                    handleAll();
                  }}
                >
                  Tất Cả
                </button>
                <button
                  className="btn btn-sm btn-outline-info  fs-5 mt-3"
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
                      <NotificationDelete
                        id={notification.id}
                        getNotifications={handleDelete}
                      >
                      </NotificationDelete>
                    </div>
                  </div>
                </div>)
              }
              )) : (notificationNotRead.map((notification) => {
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
                      <NotificationDelete
                        id={notification.id}
                        getNotifications={handleDeleteNotRead}
                      >
                      </NotificationDelete>
                    </div>
                  </div>
                </div>

                )
              }))}
            </div>
          </div>
        )}
      </div>
      {<Modal show={modal} onHide={handleClose} backdrop="static" keyboard={false} className={styles.modalcss}>
        <Modal.Header >
          <Modal.Title className={styles.titlemodal}>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.contentmodal}>
          {data ? data.content : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng thông báo
          </Button>
        </Modal.Footer>
      </Modal>}
    </>
  );
}
