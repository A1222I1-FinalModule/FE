import React from "react";
import * as notificationService from "../../Services/API/notification/NotificationService";
import styles from "./NotificationSave.module.css";
import notification from "../../Assets/Images/img-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export default function NotificationSave() {
  const navigate = useNavigate();
  const notificationInit = {
    id: 0,
    content: "",
    target: 1,
  };

  const validateNotification = {};

  const addNewNotification = async (notification) => {
    await notificationService.saveNotification(notification);
    console.log(notification);
    alert("send notification");
  };
  return (
    <>
      <Formik
        initialValues={notificationInit}
        onSubmit={(value) => {
          addNewNotification(value);
        }}
      >
        <Form>
          <div className={styles.contact1}>
            <div className={styles.containercontact1}>
              <div className={styles.contact1pic} data-tilt>
                <img src={notification} alt="Thông báo" />
              </div>

              <div className={styles.contact1form}>
                <span className={styles.contact1formtitle}>
                  {" "}
                  Đăng thông báo{" "}
                </span>

                <div className={styles.wrapinput1}>
                  <Field
                    as="textarea"
                    name="content"
                    className={styles.input1}
                    placeholder="Nội dung"
                  ></Field>
                  <span className={styles.shadowninput1}></span>
                </div>

                <div className={styles.wrapinput1}>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="target"
                      id="inlineRadio1"
                      value="3"
                    />
                    <label
                      className={styles.formchecklabel}
                      htmlFor="inlineRadio1"
                    >
                      Tất Cả
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="target"
                      id="inlineRadio2"
                      value="1"
                    />
                    <label
                      className={styles.formchecklabel}
                      htmlFor="inlineRadio2"
                    >
                      Salers
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="target"
                      id="inlineRadio3"
                      value="2"
                    />
                    <label
                      className={styles.formchecklabel}
                      htmlFor="inlineRadio3"
                    >
                      Quản Kho
                    </label>
                  </div>
                </div>

                <div className={styles.containercontact1formbtn}>
                  <div className="contact1-form-btn1">
                    <button type="submit" className={styles.contact1formbtn}>
                      <span>Gửi</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className={styles.arrowRight}
                      />
                    </button>
                  </div>
                  <div className={styles.contact1formbtn2}>
                    <button className={styles.contact1formbtn}>
                      <span> Hủy Bỏ </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
