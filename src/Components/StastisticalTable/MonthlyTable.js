import { useEffect, useState } from "react"
import style from '../../Assets/css/StatisticalTable.module.css';
import * as statisticalService from '../../Services/API/StatisticalService'

const MonthlyTable = () => {
  const [statisticalTable, setStatisticalTable] = useState([])
  const thisMonth = getMonth()
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalExpenditure, setTotalExpenditure] = useState(0)

  useEffect(() => {
    getMonthlyStastistical()
  }, [])
  useEffect(() => {
    getRevenue()
    getExpenditure()
  }, [statisticalTable])

  const getMonthlyStastistical = async () => {
    let respone = await statisticalService.getMonthlyStastisticalBySaler()
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

  function getMonth() {
    let date = new Date().toLocaleDateString().split('/')
    return date[0] + '/' + date[2]
  }

  if (statisticalTable === null) return null

  return (
    <div className={`col-10`}>
      <div className={`card text-dark w-100 mb-3`}>
        <div className={`card-body w-100`}>
          <div className={`row`}>
            <p className={`col-3 title mb-2`}>Tháng/năm</p>
            <p className={`col-3 mb-2`}>{thisMonth}</p>
            <button className={`col-6 mb-2 btn btn-secondary`} onClick={window.print}>In thống kê</button>
          </div>
          &nbsp;
          <div className={`row`}>
            <table className={`table table table-striped`}>
              <thead className>
                <tr><th scope={`col`}>STT</th>
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
                        <td>{index + 1}</td>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                        <td>{item[1] - item[2]}</td>
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
                <p className={`col-7 mb-2`}>{totalRevenue}</p>
              </div>
            </div>
            <div className={`${style.total_expenditure} col-6`}>
              <div className={`row`}>
                <p className={`col-5 title mb-2`}>Tổng chi</p>
                <p className={`col-7 mb-2`}>{totalExpenditure}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyTable