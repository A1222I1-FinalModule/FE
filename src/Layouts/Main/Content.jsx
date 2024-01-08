import React from 'react';
import Footer from '../Footer/Footer';
export default function Content(){
    return(
      <div class="content col-10 ps-0">
        <div class="content-main">
        <div class="content_first">
          <div class="row">
            <div class="col-4">
              <div class="content_customer">
                <div class="chart_customer">
                  <div class="chart">
                    <ion-icon name="person"></ion-icon>
                  </div>
                  <div class="chart_name">
                    <span>Lượng khách</span>
                  </div>
                </div>
                <div class="total_customer">
                  <div class="number">
                    <h4>45679</h4>
                  </div>
                  <div class="percent">
                    <span>Tăng 20%</span>
                  </div>
                </div>
              </div>                  
            </div>
            <div class="col-4">
              <div class="content_customer">
                <div class="chart_customer">
                  <div class="chart">
                    <ion-icon name="pie"></ion-icon>
                  </div>
                  <div class="chart_name">
                    <span>Đơn hàng</span>
                  </div>
                </div>
                <div class="total_customer">
                  <div class="number">
                    <h4>80927</h4>
                  </div>
                  <div class="percent">
                    <span>Tăng 60%</span>
                  </div>
                </div>
              </div>           
            </div>
            <div class="col-4">
              <div class="sale">
                <div class="sale_item">
                  <div class="sale_text">
                      <span>Doanh thu</span>
                  </div>
                  <div class="sale_select">
                      <select name="" id="">
                          <option value="">Tuần này</option>
                          <option value="">Tháng này</option>
                      </select>
                  </div>
                </div>
                <div class="sale_total">
                  <h2>36586</h2>
                  <h8>Tổng doanh thu</h8>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-second">
          
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
           
        </div>
        <div class="content-three">  
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
          <Footer></Footer>
        </div>
      </div> 
      </div>
         
    )
}