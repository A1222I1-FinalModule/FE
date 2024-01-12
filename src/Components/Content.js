import React from 'react';
import { CustomerGrowth } from './ContentElement/CustomerGrowth';
import { OrderGrowth } from './ContentElement/OrderGrowth';
import { Revenue } from './ContentElement/Revenue';
import { EmployeeSaleTop } from './ContentElement/EmployeeSaleTop';
import { OrderRecent } from './ContentElement/OrderRecent';
export default function Content() {

  return (
    <div className="content col-10 ps-0">
      <div className="content-main">
        <div className="content_first">
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
        <div className="content-second">
          <EmployeeSaleTop />
        </div>
        <div className="content-three">
          <OrderRecent />
        </div>
      </div>
    </div>
  )
}