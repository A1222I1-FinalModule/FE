import React from 'react';
import { CustomerGrowth } from './ContentElement/CustomerGrowth';
import { OrderGrowth } from './ContentElement/OrderGrowth';
import { Revenue } from './ContentElement/Revenue';
import { EmployeeSaleTop } from './ContentElement/EmployeeSaleTop';
import { OrderRecent } from './ContentElement/OrderRecent';
import style from '../Assets/Styles/StyleDashBoard.module.css';
<<<<<<< HEAD
export default function Content(){
  
    return(
      <div className={style.content + " col-10 ps-0"}>
=======
export default function Content() {

  return (
    <div className={style.content + " col-10 ps-0"}>
>>>>>>> 4116d6cdec60bff358b10832c8643345110d973d
      <div className={style.content_main}>
        <div className={style.content_first}>
          <div className="row">
            <div className="col-4">
              <CustomerGrowth />
            </div>
            <div className="col-4">
              <OrderGrowth />
            </div>
            <div className="col-4">
              <Revenue />
            </div>
          </div>
        </div>
        <div className={style.content_second}>
          <EmployeeSaleTop />
        </div>
        <div className={style.content_three}>
          <OrderRecent />
        </div>
      </div>
    </div>
  )
}