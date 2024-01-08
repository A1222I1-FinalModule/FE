import React from "react";
import { useState } from "react";
import "./NotificationList.css";

export default function NotificationList() {
  const [isActive, setIsActive] = useState(false);
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
            <span className="icon-button_badge">2</span>
            <div className="title-hide">
              <p className="title-show">Thông báo</p>
            </div>
          </button>
          {isActive && (
            <div className="dropdown-container">
              <div className="title-notification">
                <div className="content-title">Thông báo</div>
                <div className="button-notification">
                  <button className="btn btn-outline-info">Tất Cả</button>
                  <button className="btn btn-outline-info">Chưa đọc</button>
                </div>
              </div>
              <div className="content-body">
                <div className="content-notification">
                  <p className="content">
                    Đầu năm 2020 khi Covid-19 bùng phát, Học viện Quân y đề xuất
                    Bộ Khoa học và Công nghệ giao đơn vị phát triển test xét
                    nghiệm. Đề tài được Viện Nghiên cứu Y dược học quân sự
                    (thuộc Học viện Quân y) nghiên cứu và ông Hùng yêu cầu ông
                    Sơn bổ sung Công ty Cổ phần Công nghệ Việt Á cùng tham gia.
                  </p>
                  <p className="date">18/12/2023</p>

                  <div
                    role="button"
                    className="threedots"
                    onClick={() => toggleElement(1)}
                  >
                    <i className="bi bi-three-dots"></i>
                    <div className="threedot-detail" id="selection1">
                      <a className="content-link" href="#">
                        Chi tiết Thông báo
                      </a>
                      <a className="content-link" href="#">
                        Gỡ thông báo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content-notification">
                  <p className="content">
                    Đầu năm 2020 khi Covid-19 bùng phát, Học viện Quân y đề xuất
                    Bộ Khoa học và Công nghệ giao đơn vị phát triển test xét
                    nghiệm. Đề tài được Viện Nghiên cứu Y dược học quân sự
                    (thuộc Học viện Quân y) nghiên cứu và ông Hùng yêu cầu ông
                    Sơn bổ sung Công ty Cổ phần Công nghệ Việt Á cùng tham gia.
                  </p>
                  <p className="date">18/12/2023</p>
                  <div
                    role="button"
                    className="threedots"
                    onClick={() => toggleElement(52)}
                  >
                    <i className="bi bi-three-dots"></i>
                    <div className="threedot-detail" id="selection52">
                      <a className="content-link" href="#">
                        Chi tiết Thông báo
                      </a>
                      <a className="content-link" href="#">
                        Gỡ thông báo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content-notification">
                  <p className="content">
                    Đầu năm 2020 khi Covid-19 bùng phát, Học viện Quân y đề xuất
                    Bộ Khoa học và Công nghệ giao đơn vị phát triển test xét
                    nghiệm. Đề tài được Viện Nghiên cứu Y dược học quân sự
                    (thuộc Học viện Quân y) nghiên cứu và ông Hùng yêu cầu ông
                    Sơn bổ sung Công ty Cổ phần Công nghệ Việt Á cùng tham gia.
                  </p>
                  <p className="date">18/12/2023</p>
                  <div
                    role="button"
                    className="threedots"
                    onClick={() => toggleElement(3)}
                  >
                    <i className="bi bi-three-dots"></i>
                    <div className="threedot-detail" id="selection3">
                      <a className="content-link" href="#">
                        Chi tiết Thông báo
                      </a>
                      <a className="content-link" href="#">
                        Gỡ thông báo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content-notification">
                  <p className="content">
                    Đầu năm 2020 khi Covid-19 bùng phát, Học viện Quân y đề xuất
                    Bộ Khoa học và Công nghệ giao đơn vị phát triển test xét
                    nghiệm. Đề tài được Viện Nghiên cứu Y dược học quân sự
                    (thuộc Học viện Quân y) nghiên cứu và ông Hùng yêu cầu ông
                    Sơn bổ sung Công ty Cổ phần Công nghệ Việt Á cùng tham gia.
                  </p>
                  <p className="date">18/12/2023</p>
                  <div
                    role="button"
                    className="threedots"
                    onClick={() => toggleElement(4)}
                  >
                    <i className="bi bi-three-dots"></i>
                    <div className="threedot-detail" id="selection4">
                      <a className="content-link" href="#">
                        Chi tiết Thông báo
                      </a>
                      <a className="content-link" href="#">
                        Gỡ thông báo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content-notification">
                  <p className="content">
                    Đầu năm 2020 khi Covid-19 bùng phát, Học viện Quân y đề xuất
                    Bộ Khoa học và Công nghệ giao đơn vị phát triển test xét
                    nghiệm. Đề tài được Viện Nghiên cứu Y dược học quân sự
                    (thuộc Học viện Quân y) nghiên cứu và ông Hùng yêu cầu ông
                    Sơn bổ sung Công ty Cổ phần Công nghệ Việt Á cùng tham gia.
                  </p>
                  <p className="date">18/12/2023</p>
                  <div
                    role="button"
                    className="threedots"
                    onClick={() => toggleElement(10)}
                  >
                    <i className="bi bi-three-dots"></i>
                    <div className="threedot-detail" id="selection10">
                      <a className="content-link" href="#">
                        Chi tiết Thông báo
                      </a>
                      <a className="content-link" href="#">
                        Gỡ thông báo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </body>
    </>
  );
}
