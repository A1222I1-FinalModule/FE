import React,{useState, useEffect} from "react";
import BillService from '../../Services/API/BillService';
import style from '../../assets/Styles/StyleDashBoard.module.css';
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
      <div className={style.content_customer}>
      <div className={style.chart_customer}>
        <div className={style.chart}>
          <ion-icon name="pie"></ion-icon>
        </div>
        <div className={style.chart_name}>
          <span>Đơn hàng</span>
        </div>
      </div>
      <div className={style.total_customer} key={index}>
        <div className={style.number}>
          <h4>{value.orderCount}</h4>
        </div>
        <div className={style.percent}>
          <span>Tăng {value.orderGrowthPercentage}%</span>
        </div>
      </div>
    </div>
    ))    
    :null}
    </>
  );
};
