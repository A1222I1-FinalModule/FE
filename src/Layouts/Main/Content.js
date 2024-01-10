import React from 'react';
import Footer from '../Footer/Footer';
import { CustomerGrowth } from './ContentElement/CustomerGrowth';
import { OrderGrowth } from './ContentElement/OrderGrowth';
import { Revenue } from './ContentElement/Revenue';
import { EmployeeSaleTop } from './ContentElement/EmployeeSaleTop';
import { OrderRecent } from './ContentElement/OrderRecent';
export default function Content(){
  
    return(
      <div class="content col-10 ps-0">
        <div class="content-main">
        <div class="content_first">
          <div class="row">
            <div class="col-4">
              <CustomerGrowth></CustomerGrowth>
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
          <Footer></Footer>
        </div>
      </div> 
      </div>
         
    )
}