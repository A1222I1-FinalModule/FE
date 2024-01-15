import { React, useEffect } from "react";
import style from '../Assets/Styles/StyleDashBoard.module.css';
import DailyStatisticalTable from "../templates/MonthlyStatisticalTable";
export const ContentSaler = ({ feature }) => {
  if (feature === 'daily-statistical-table') {
    return (
      <div className={`${style.content} col-10 ps-0`}>
        <div className={style.contain_main}>
          <DailyStatisticalTable />
        </div>
      </div>
    )
  }

  return (
    <div className={`${style.content} col-10 ps-0`}>
      <div className={style.contain_main}>
        <span>Nội dung chức năng cho Saler</span>
      </div>
    </div>
  );
};
