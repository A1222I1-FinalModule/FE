import React, { useState, useEffect } from 'react';
import BillService from '../../Services/API/BillService';
import style from '../../Assets/Styles/StyleDashBoard.module.css';

export const Revenue = () => {
  const [weeklyRevenue, setWeeklyRevenue] = useState(null);
  const [monthlyRevenue, setMonthlyRevenue] = useState(null);
  const [selectedOption, setSelectedOption] = useState('week');
  const formatMoney = new Intl.NumberFormat('vi-VN',{
    style: 'currency',
    currency: 'VND'
  }).format(monthlyRevenue,weeklyRevenue);
  useEffect(() => {
    getByTime();
  }, []);
  const getByTime = async () => {
    try {
      let weeklyTemp = await BillService.getWeekRevenue();
      let monthlyTemp = await BillService.getMonthRevenue();

      setWeeklyRevenue(weeklyTemp);
      setMonthlyRevenue(monthlyTemp);
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={style.sale}>
        <div className={style.sale_item}>
          <div className={style.sale_text}>
            <span>Doanh thu</span>
          </div>
          <div className={style.sale_select}>
            <select name="" id="" onChange={handleSelectChange}>
              <option value="week">Tuần này</option>
              <option value="month">Tháng này</option>
            </select>
          </div>
        </div>
        <div className={style.sale_total}>
          {selectedOption === 'week' && (
            <>
              <h2>{formatMoney}</h2>
              <h8>Tổng doanh thu tuần gần nhất</h8>
            </>
          )}
          {selectedOption === 'month' && (
            <>
              <h2>{formatMoney}</h2>
              <h8>Tổng doanh thu tháng gần nhất</h8>
            </>
          )}
        </div>
      </div>
    </>
  );
};
