import React from "react";

export const OrderRecent = () => {
  return (
    <>
      <div class="text">
        <span>Top 5 đơn hàng mới nhất</span>
      </div>
      <div class="timeline">
        <ul>
          <li>
            <span>24 May 2018</span>
            <div class="content">
              <h3>Tên khách hàng 1</h3>
            </div>
          </li>
          <li>
            <span>25 May 2018</span>
            <div class="content">
              <h3>Tên khách hàng 2</h3>
            </div>
          </li>
          <li>
            <span>26 May 2018</span>
            <div class="content">
              <h3>Tên khách hàng 3</h3>
            </div>
          </li>
          <li>
            <span>27 May 2018</span>
            <div class="content">
              <h3>Tên khách hàng 4</h3>
            </div>
          </li>
          <li>
            <span>27 May 2018</span>
            <div class="content">
              <h3>Tên khách hàng 4</h3>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
