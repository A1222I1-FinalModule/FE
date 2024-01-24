import React,{useState, useEffect} from 'react';
import BillService from '../../Services/API/BillService';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
export const OrderRecent = () => {
  const[orderRecent,setOrderRecent] = useState(null);
  useEffect(()=>{
      getAll();
  },[]);
  const getAll = async() =>{
    try {
      let temp = await BillService.getTopOrderRecent();
      setOrderRecent(temp);
    } catch (error) {
      console.error('Error get data:', error);
    }
  };
  return (
    <>
      <div className="text">
        <span>Top 5 đơn hàng mới nhất</span>
      </div>
      { orderRecent ? orderRecent.map((value,index)=>(
        <div className={style.time_line}>
        <ul>
          <li key={index}>
            <span>{value.orderDate}</span>
            <div className={style.content}>
              <h3>{value.customerName}</h3>
            </div>
          </li>
        </ul>
      </div>
      ))
      :null}
    </>
  );
};
