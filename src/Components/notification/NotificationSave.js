import React from "react";
import "./NotificationSave.css";
import notification from "../../assets/Images/img-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NotificationSave() {
  return (
    <>
      <div className="contact1">
        <div className="container-contact1">
          <div className="contact1-pic js-tilt" data-tilt>
            <img src={notification} alt="Thông báo" />
          </div>

          <form className="contact1-form">
            <span className="contact1-form-title"> Đăng thông báo </span>

            <div className="wrap-input1">
              <textarea className="input1" placeholder="Nội dung"></textarea>
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio1">
                  Tất Cả
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  Salers
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio3">
                  Quản Kho
                </label>
              </div>
            </div>

            <div className="container-contact1-form-btn">
              <div className="contact1-form-btn1">
                <button className="contact1-form-btn">
                  <span>Gửi</span>
                  <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
                </button>
              </div>
              <div className="contact1-form-btn2">
                <button className="contact1-form-btn">
                  <span> Hủy Bỏ </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
