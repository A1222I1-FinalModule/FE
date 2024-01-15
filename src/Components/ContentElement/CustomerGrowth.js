import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import BillService from '../../Services/API/BillService';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
export const CustomerGrowth = () => {
  const [customerGrowth, setCustomerGrowth] = useState(null);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      let temp = await BillService.getCustomerGrowth();
      setCustomerGrowth(temp);
    } catch (error) {
      console.error('Error get data:', error);
    }
  };
  return (
    <>
      {customerGrowth ? customerGrowth.map((value, index) => (
        <div className={style.content_customer}>
          <div className={style.chart_customer}>
            <div className={style.chart}>
              <ion-icon name="person"></ion-icon>
            </div>
            <div className={style.chart_name}>
              <span>Lượng khách</span>
            </div>
          </div>
          <div className={style.total_customer}>
            <div className={style.number} key={index}>
              <h4>{value.customerCount}</h4>
            </div>
            <div className={style.percent}>
              <span>Tăng {value.customerGrowthPercentage} %</span>
            </div>
          </div>
        </div>
      ))
        : null}
    </>
  )
}
