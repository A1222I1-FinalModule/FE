import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import EmployeeService from '../../Services/API/EmployeeService';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
import style from '../../Assets/Styles/StyleDashBoard.module.css';
export const EmployeeSaleTop = () => {
  const [employeeTop, setEmployeeTop] = useState(null);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      let temp = await EmployeeService.getEmployeeSaleTop();
      setEmployeeTop(temp);
    } catch (error) {
      console.error('Error get data:', error);
    }
  };
  return (
    <>
      <div className={style.table_title}>
        <span>Top nhân viên bán hàng tốt nhất</span>
      </div>
      <div className={style.table_record}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Họ và tên</th>
              <th scope="col">Giá (vnđ)</th>
              <th scope="col">Số lượng (cái)</th>
            </tr>
          </thead>
          <tbody>
            {employeeTop ? employeeTop.map((value, index) => (
              <tr key={index}>
                <th scope="row">{value.employeeName}</th>
                <td>{value.totalSales}</td>
                <td>{value.totalOrders}</td>
              </tr>
            ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};
