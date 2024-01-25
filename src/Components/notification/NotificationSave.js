import React from "react";
import * as notificationService from "../../Services/API/notification/NotificationService";
import styles from "./NotificationSave.module.css";
import notification from "../../Assets/Images/img-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as yup from 'yup';

export default function NotificationSave() {
  const navigate = useNavigate();
  const notificationInit = {
    id: 0,
    content: "",
    target: "",
  };

  const validateNotification = {
    content: yup.string().required("Nội dung không được để trống"),
    target: yup.string().required("Chưa chọn đối tượng gửi")
  };

  const addNewNotification = async (notification) => {
    await notificationService.saveNotification(notification);
    toast.success(' gửi thông báo thành công !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  };

  const handleCancleNotification = () => {
    navigate("/admin/info");
  }
  return (
    <>
      <Formik
        initialValues={notificationInit}
        onSubmit={(value) => {
          addNewNotification(value);
        }}
        validationSchema={yup.object(validateNotification)}
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
                <ErrorMessage name="content" component={"span"} className={styles.validateContent}></ErrorMessage>
                <div className={styles.wrapinput1}>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="target"
                      id="inlineRadio1"
                      value="3"
                    ></Field>
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
                      Người bán hàng
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="target"
                      id="inlineRadio3"
                      value="2"
                    ></Field>
                    <label
                      className={styles.formchecklabel}
                      htmlFor="inlineRadio3"
                    >
                      Quản Kho
                    </label>
                  </div>
                </div>
                <ErrorMessage name="target" component={"span"} className={styles.validateContent}></ErrorMessage>

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
                    <button type="button" className={styles.contact1formbtn} onClick={() => handleCancleNotification()}>
                      <span> Hủy Bỏ </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
}
