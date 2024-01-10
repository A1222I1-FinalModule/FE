import React from "react";

export const EmployeeSaleTop = () => {
  return (
    <>
      <div class="table_title">
        <span>Top nhân viên bán hàng tốt nhất</span>
      </div>
      <div class="table_record">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Họ và tên</th>
              <th scope="col">Giá (vnđ)</th>
              <th scope="col">Số lượng (cái)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Moon Fever</th>
              <td>42.070</td>
              <td>801</td>
            </tr>
            <tr>
              <th scope="row">Dude You Re Getting A Telescope</th>
              <td>38.667</td>
              <td>882</td>
            </tr>
            <tr>
              <th scope="row">Telescope 101</th>
              <td>12.467</td>
              <td>181</td>
            </tr>
            <tr>
              <th scope="row">Asteroids</th>
              <td>8118</td>
              <td>336</td>
            </tr>
            <tr>
              <th scope="row">The Glossary Of Telescope</th>
              <td>21.136</td>
              <td>979</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
