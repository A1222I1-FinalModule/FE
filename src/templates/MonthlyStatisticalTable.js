import { useEffect, useState } from 'react';
import style from '../Assets/css/StatisticalTable.css';
import * as billService from '../Services/API/BillService';
const StatisticalTable = () => {
    const [bills, setBills] = useState(null);
    const date = new Date().toLocaleDateString()
    const [totalRevenue, setTotalRevenue] = useState(0)
    const [totalExpenditure, setTotalExpenditure] = useState(0)
    useEffect(() => {
        getAllBill()
        getRevenue()
        getExpenditure()
    }, [bills])

    const getAllBill = async () => {
        const response = await billService.getAll()
        setBills(response)
    }
    const getRevenue = () => {
        const total = bills?.reduce((total, bill) => {
            return total + bill[1]
        }, 0)
        setTotalRevenue(total)
    }
    const getExpenditure = () => {
        const total = bills?.reduce((total, bill) => {
            return total + bill[1]
        }, 0)
        setTotalExpenditure(total)
    }

    if (bills === null) return null

    return (
        <div className={style.statistical}>
            <div className="container">
                <div className="card text-dark w-100 mb-3">
                    <div className="card-body w-100">
                        <div className="row">
                            <p className="col-3 title mb-2">Tháng/năm</p>
                            <p className="col-3 mb-2" id="day_month_year">{date}</p>
                        </div>
                        &nbsp;
                        <div className="row">
                            <table className="table table table-striped">
                                <thead className>
                                    <tr><th scope="col">STT</th>
                                        <th scope="col">Ngày</th>
                                        <th scope="col">Tổng thu</th>
                                        <th scope="col">Tổng chi</th>
                                        <th scope="col">Lãi</th>
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
                        <div className="row">
                            <div className="total-revenue col-6">
                                <div className="row">
                                    <p className="col-5 title mb-2">Tổng thu</p>
                                    <p className="col-7 mb-2">{totalRevenue}</p>
                                </div>
                            </div>
                            <div className="total-expenditure col-6">
                                <div className="row">
                                    <p className="col-5 title mb-2">Tổng chi</p>
                                    <p className="col-7 mb-2">{totalExpenditure}</p>
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div className="row">
                            <button className="btn btn-sm btn-outline-secondary" onClick={window.print}>In thống kê</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StatisticalTable;