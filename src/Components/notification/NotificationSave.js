import React from "react";
import "./NotificationSave.css";
import notification from "../../assets/Images/img-03.png";

export default function NotificationSave() {
  return (
    <>
      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <img src={notification} alt="Thông báo" />
          </div>

          <form class="contact1-form">
            <span class="contact1-form-title"> Đăng thông báo </span>

            <div class="wrap-input1">
              <textarea class="input1" placeholder="Nội dung"></textarea>
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Tất Cả
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Salers
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio3">
                  Quản Kho
                </label>
              </div>
            </div>

            <div class="container-contact1-form-btn">
              <div class="contact1-form-btn1">
                <button class="contact1-form-btn">
                  <span>
                    Gửi
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="contact1-form-btn2">
                <button class="contact1-form-btn">
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
