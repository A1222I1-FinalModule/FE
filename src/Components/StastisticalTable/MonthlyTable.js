import { useEffect, useState } from "react"
import style from '../../Assets/css/StatisticalTable.module.css';
import * as statisticalService from '../../Services/API/StatisticalService'

const MonthlyTable = () => {
  const [bills, setBills] = useState(null);
  const [importings, setImportings] = useState(null);
  const thisMonth = getMonth()
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalExpenditure, setTotalExpenditure] = useState(0)

  useEffect(() => {
    getMonthlyStastistical()
    getRevenue()
    getExpenditure()
  }, [])

  const getMonthlyStastistical = async () => {
    return await statisticalService.getMonthlyStastisticalByAdmin()
  }

  const getRevenue = () => {
    const total = bills?.reduce((total, bill) => {
      return total + bill[1]
    }, 0)
    setTotalRevenue(total)
  }
  const getExpenditure = () => {
    const total = importings?.reduce((total, importing) => {
      return total + importing.total
    }, 0)
    setTotalExpenditure(total)
  }

  const getMonth = () => {
    let date = new Date().toLocaleDateString().split('/')
    return date[1] + '/' + date[2]
  }

  if (bills === null || importings === null) return null

  return (
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
                bills.map((bill, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{bill[0]}</td>
                      <td>{bill[1]}</td>
                      <td>{0}</td>
                      <td>{bill[1] - 0}</td>
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
  )
}

export default MonthlyTable