import React, { useState, useEffect } from 'react';
import BillService from '../../Services/API/BillService';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
import moment from 'moment';

export const OrderRecent = () => {
  const [orderRecent, setOrderRecent] = useState(null);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      let temp = await BillService.getTopOrderRecent();
      setOrderRecent(temp);
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };

  return (
    <>
      <div className="text">
        <span>Top 5 đơn hàng mới nhất</span>
      </div>
      {orderRecent ? (
        <div className={style.time_line}>
          <ul>
            {orderRecent.map((value, index) => (
              <li key={index}>
                <span>{moment(value.orderDate).format('YYYY-MM-DD HH:mm:ss')}</span>
                <div className={style.content}>
                  <h3>{value.customerName}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
