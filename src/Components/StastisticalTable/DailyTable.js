import { useEffect, useState, useRef } from 'react';
import style from '../../Assets/css/StatisticalTable.module.css';
import * as statisticalService from '../../Services/API/StatisticalService'
import { Button } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { Chart as ChartJS, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import NavbarTable from './NavbarTable';
import { ConfigProvider, DatePicker } from 'antd';
import locale from 'antd/locale/vi_VN';
import dayjs from 'dayjs';

import 'dayjs/locale/vi';
import { formatMoney } from '../../utils/helpers';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const DailyTable = () => {
  const [statisticalTable, setStatisticalTable] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalExpenditure, setTotalExpenditure] = useState(0)
  const [date, setDate] = useState(new Date().toLocaleDateString())

  let componentRef = useRef();

  useEffect(() => {
    getDailyStastistical()
  }, [date])
  useEffect(() => {
    getRevenue()
    getExpenditure()
  }, [statisticalTable])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Biểu đồ thống kê thu, chi theo tháng',
      },
    },
  }

  const dataForPieChart = {
    labels: ['Tổng thu', 'Tổng chi'],
    datasets: [
      {
        labels: ['Tổng thu', 'Tổng chi'],
        data: [totalRevenue, totalExpenditure],
        backgroundColor: ['rgb(255, 99, 132)', 'rgba(54, 162, 235, 0.5)'],
        borderColor: ['rgb(255, 99, 132)', 'rgba(54, 162, 235, 0.5)'],
        borderWidth: 1
      }
    ]
  }

  const getDailyStastistical = async () => {
    let chooseDate = date === new Date().toLocaleDateString() ? getDateToSearch(date) : date
    console.log(chooseDate)
    let respone = await statisticalService.getDailyStastistical(chooseDate)
    console.log(respone)
    setStatisticalTable(respone)
  }
  const getRevenue = () => {
    const total = statisticalTable?.reduce((total, item) => {
      return total + item[1]
    }, 0)
    console.log(total);
    setTotalRevenue(total)
  }
  const getExpenditure = () => {
    const total = statisticalTable?.reduce((total, item) => {
      return total + item[2]
    }, 0)
    console.log(total);
    setTotalExpenditure(total)
  }
  const getDateToSearch = (date) => {
    let temp = date.split('/')
    if (temp[0].length === 1) temp[0] = `0${temp[0]}`
    return `${temp[2]}-${temp[0]}-${temp[1]}`
  }

  const chooseDate = (date, dateString) => {
    console.log(dateString);
    if (dateString === '') setDate(new Date().toLocaleDateString())
    else setDate(dateString)
  };

  if (statisticalTable === null || totalExpenditure === null || totalExpenditure === null) return null

  return (
    <div className={style.statistical}>
      <div className={`card text-dark w-100 mb-3`}>
        <NavbarTable />
        <div className={`card-body w-100`} ref={(element) => (componentRef = element)}>
          <div className={`row`}>
            <p className={`col-3 title mb-2`}>Ngày/tháng/năm</p>
            <div className={`col-6 title mb-2`}>
              <ConfigProvider locale={locale}>
                <DatePicker onChange={chooseDate} defaultValue={dayjs(dayjs())} />
              </ConfigProvider>
            </div>
            <ReactToPrint
              trigger={() => <Button className={`col-3 mb-2 btn btn-sm btn-secondary`}>In thống kê</Button>}
              content={() => componentRef}
            />
          </div>
          &nbsp;
          <div className={`row`}>
            <table className={`table table table-striped`}>
              <thead className>
                <tr>
                  <th className="text-center" scope={`col`}>STT</th>
                  <th scope={`col`}>Ngày</th>
                  <th scope={`col`}>Tổng thu</th>
                  <th scope={`col`}>Tổng chi</th>
                  <th scope={`col`}>Lãi</th>
                </tr>
              </thead>
              <tbody>
                {
                  statisticalTable.map((item, index) => {
                    return (
                      <tr key={item[0]}>
                        <td className='text-center'>{index + 1}</td>
                        <td>{item[0]}</td>
                        <td>{formatMoney(item[1])}</td>
                        <td>{formatMoney(item[2])}</td>
                        <td>{formatMoney(item[1] - item[2])}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className={`row`}>
            <div className={`${style.total_revenue} col-6`}>
              <div className={`row`}>
                <p className={`col-5 title mb-2`}>Tổng thu</p>
                <p className={`col-7 mb-2`}>{formatMoney(totalRevenue)}</p>
              </div>
            </div>
            <div className={`${style.total_expenditure} col-6`}>
              <div className={`row`}>
                <p className={`col-5 title mb-2`}>Tổng chi</p>
                <p className={`col-7 mb-2`}>{formatMoney(totalExpenditure)}</p>
              </div>
            </div>
          </div>
          <div className={`row`}>
            <Pie className={style.chart}
              options={options}
              data={dataForPieChart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyTable