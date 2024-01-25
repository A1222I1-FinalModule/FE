import React from 'react';
import { CustomerGrowth } from './ContentElement/CustomerGrowth';
import { OrderGrowth } from './ContentElement/OrderGrowth';
import { Revenue } from './ContentElement/Revenue';
import { EmployeeSaleTop } from './ContentElement/EmployeeSaleTop';
import { OrderRecent } from './ContentElement/OrderRecent';
import style from '../Assets/Styles/StyleDashBoard.module.css';
export default function Content(){
  
    return(
      <div className={style.content + " col-10 ps-0"}>
      <div className={style.content_main}>
        <div className={style.content_first}>
          <div className="row">
            <div className="col-4">
              <CustomerGrowth />
            </div>
            <div class="col-4">
              <OrderGrowth></OrderGrowth>
            </div>
            <div class="col-4">
              <Revenue></Revenue>
            </div>
          </div>
        </div>
        <div class="content-second">
          <EmployeeSaleTop></EmployeeSaleTop>
        </div>
        <div class="content-three">
          <OrderRecent></OrderRecent>
        </div>
      </div>
    </div>
  )
}
