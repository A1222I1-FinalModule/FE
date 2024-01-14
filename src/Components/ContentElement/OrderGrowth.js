import React, { useState, useEffect } from "react";
import BillService from "../../Services/API/BillService";
export const OrderGrowth = () => {
  const [orderGrowth, setOrderGrowth] = useState(null);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      let temp = await BillService.getOrderGrowth();
      setOrderGrowth(temp);
    } catch (error) {
      console.error("Error get data:", error);
    }
  };
  return (
    <>
      {orderGrowth
        ? orderGrowth.map((value, index) => (
            <div className="content_customer">
              <div className="chart_customer">
                <div className="chart">
                  <ion-icon name="pie"></ion-icon>
                </div>
                <div className="chart_name">
                  <span>Đơn hàng</span>
                </div>
              </div>
              <div className="total_customer" key={index}>
                <div className="number">
                  <h4>{value.orderCount}</h4>
                </div>
                <div className="percent">
                  <span>Tăng {value.orderGrowthPercentage}%</span>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};
