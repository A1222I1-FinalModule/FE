import { useEffect, useRef, useState } from "react"
import style from '../../Assets/css/StatisticalTable.module.css';
import * as statisticalService from '../../Services/API/StatisticalService'
import { Chart as ChartJS, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale, ArcElement } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";
import NavbarTable from "./NavbarTable";
import locale from 'antd/locale/vi_VN';
import dayjs from 'dayjs';

import 'dayjs/locale/vi';
import { formatMoney } from '../../utils/helpers';
import { ConfigProvider, DatePicker } from "antd";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const MonthlyTable = () => {
  const [statisticalTable, setStatisticalTable] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalExpenditure, setTotalExpenditure] = useState(0)
  const [month, setMonth] = useState(getMonth())

  let componentRef = useRef();

  useEffect(() => {
    getMonthlyStastistical()
  }, [month])
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

  const labels = statisticalTable?.map(item => item[0])

  const dataForBarChart = {
    labels,
    datasets: [
      {
        label: 'Tổng thu',
        data: statisticalTable?.map(item => item[1]),
        backgroundColor: 'rgb(255, 99, 132)'
      },
      {
        label: 'Tổng chi',
        data: statisticalTable?.map(item => item[2]),
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      }
    ]
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

  const getMonthlyStastistical = async () => {
    let chooseMonth = month === getMonth() ? getMonthToSearch(month) : month
    console.log(chooseMonth);
    let respone = await statisticalService.getMonthlyStastistical(chooseMonth)
    setStatisticalTable(respone)
  }

  const getRevenue = () => {
    const total = statisticalTable?.reduce((total, item) => {
      return total + item[1]
    }, 0)
    setTotalRevenue(total)
  }
  const getExpenditure = () => {
    const total = statisticalTable?.reduce((total, item) => {
      return total + item[2]
    }, 0)
    setTotalExpenditure(total)
  }
  const getMonthToSearch = (month) => {
    let temp = month.split('/').reverse()
    if (temp[1].length === 1) temp[1] = `0${temp[1]}`
    return temp.join('-')
  }
  function getMonth() {
    let date = new Date().toLocaleDateString().split('/')
    return date[0] + '/' + date[2]
  }
  const chooseMonth = (date, dateString) => {
    console.log(dateString);
    setMonth(dateString)
  };

  if (statisticalTable === null) return null

  return (
    <div className={style.statistical}>
      <div className={`card text-dark w-100 mb-3`}>
        <NavbarTable />
        <div className={`card-body w-100`} ref={(element) => (componentRef = element)}>
          <div className={`row`}>
            <p className={`col-3 title mb-2`}>Tháng/năm</p>
            <div className={`col-6 title mb-2`}>
              <ConfigProvider locale={locale}>
                <DatePicker onChange={chooseMonth} defaultValue={dayjs().month(0)} picker="month" />
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
                        <td className="text-center">{index + 1}</td>
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
          <div className={`row ${style.total}`}>
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
              data={dataForPieChart}
            />
            <Bar className={style.chart}
              options={options}
              data={dataForBarChart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyTable