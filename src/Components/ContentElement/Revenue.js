import React, { useState, useEffect } from "react";
import BillService from "../../Services/API/BillService";
export const Revenue = () => {
  const [weeklyRevenue, setWeeklyRevenue] = useState(null);
  const [monthlyRevenue, setMonthlyRevenue] = useState(null);
  const [selectedOption, setSelectedOption] = useState("week");
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
      console.error("Error getting data:", error);
    }
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="sale">
        <div className="sale_item">
          <div className="sale_text">
            <span>Doanh thu</span>
          </div>
          <div className="sale_select">
            <select name="" id="" onChange={handleSelectChange}>
              <option value="week">Tuần này</option>
              <option value="month">Tháng này</option>
            </select>
          </div>
        </div>
        <div className="sale_total">
          {selectedOption === "week" && (
            <>
              <h2>{weeklyRevenue}</h2>
              <h8>Tổng doanh thu hàng tuần</h8>
            </>
          )}
          {selectedOption === "month" && (
            <>
              <h2>{monthlyRevenue}</h2>
              <h8>Tổng doanh thu hàng tháng</h8>
            </>
          )}
        </div>
      </div>
    </>
  );
};
