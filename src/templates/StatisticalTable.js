import { useEffect, useState } from 'react';
import '../assets/css/StatisticalTable.css';
const StatisticalTable = () => {
    const [bills, setBills] = useState([]);
    const date = new Date().toLocaleDateString()
    
    useEffect( () => {
        
    }, [])
    
    return (
        <session className="statistical">
            <div className="container">
                <div className="card text-dark mb-3" style={{ maxWidth: '50rem' }}>
                    <div className="card-body">
                        <div className="row">
                            <p className="col-3 title mb-2">Ngày/tháng/năm</p>
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
                                    </tr></thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>05</td>
                                        <td>2,000,000</td>
                                        <td>800,000</td>
                                        <td>1,200,000</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>05</td>
                                        <td>1,000,000</td>
                                        <td>900,000</td>
                                        <td>100,000</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">3</td>
                                        <td>06</td>
                                        <td>2,000,000</td>
                                        <td>100,000</td>
                                        <td>1,900,000</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">4</td>
                                        <td>06</td>
                                        <td>1,500,000</td>
                                        <td>800,000</td>
                                        <td>700,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="total-revenue col-6">
                                <div className="row">
                                    <p className="col-5 title mb-2">Tổng thu</p>
                                    <p className="col-7 mb-2">6,500,000</p>
                                </div>
                            </div>
                            <div className="total-expenditure col-6">
                                <div className="row">
                                    <p className="col-5 title mb-2">Tổng chi</p>
                                    <p className="col-7 mb-2">2,600,000</p>
                                </div>
                            </div>
                        </div>
                        &nbsp;
                        <div className="row">
                            <button className="btn btn-sm btn-outline-secondary">In thống kê</button>
                        </div>
                    </div>
                </div>
            </div>
        </session>
    )
};

export default StatisticalTable;