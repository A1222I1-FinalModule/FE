import React,{useState, useEffect} from "react";
import BillService from '../../Services/API/BillService';
export const OrderGrowth = () => {
  const[orderGrowth,setOrderGrowth] = useState(null);
  useEffect(()=>{
      getAll();
  },[]);
  const getAll = async() =>{
    try {
      let temp = await BillService.getOrderGrowth();
      setOrderGrowth(temp);
    } catch (error) {
      console.error('Error get data:', error);
    }
  };
  return (
    <>
    {orderGrowth ? orderGrowth.map((value,index)=>(
      <div class="content_customer">
      <div class="chart_customer">
        <div class="chart">
          <ion-icon name="pie"></ion-icon>
        </div>
        <div class="chart_name">
          <span>Đơn hàng</span>
        </div>
      </div>
      <div class="total_customer" key={index}>
        <div class="number">
          <h4>{value.orderCount}</h4>
        </div>
        <div class="percent">
          <span>Tăng {value.orderGrowthPercentage}%</span>
        </div>
      </div>
    </div>
    ))    
    :null}
    </>
  );
};
