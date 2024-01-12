import React,{useState, useEffect} from 'react';
import BillService from '../../Services/API/BillService';
export const CustomerGrowth = () => {
  const[customerGrowth,setCustomerGrowth] = useState(null);
  useEffect(()=>{
      getAll();
  },[]);
  const getAll = async() =>{
    try {
      let temp = await BillService.getCustomerGrowth();
      setCustomerGrowth(temp);
    } catch (error) {
      console.error('Error get data:', error);
    }
  };
  return (
    <>
    {customerGrowth ? customerGrowth.map((value,index)=>(
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
      <div className="number" key={index}>
            <h4>{value.customerCount}</h4>
          </div>
          <div className="percent">
            <span>Tăng {value.customerGrowthPercentage} %</span>
          </div>
      </div>
    </div>         
    ))
    : null}
    </>
  )
}
