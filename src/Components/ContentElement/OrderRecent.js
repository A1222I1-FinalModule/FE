import React, { useState, useEffect } from "react";
import BillService from "../../Services/API/BillService";
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
      console.error("Error get data:", error);
    }
  };
  return (
    <>
      <div className="text">
        <span>Top 5 đơn hàng mới nhất</span>
      </div>
      {orderRecent
        ? orderRecent.map((value, index) => (
            <div className="timeline">
              <ul>
                <li key={index}>
                  <span>{value.orderDate}</span>
                  <div className="content">
                    <h3>{value.customerName}</h3>
                  </div>
                </li>
              </ul>
            </div>
          ))
        : null}
    </>
  );
};
