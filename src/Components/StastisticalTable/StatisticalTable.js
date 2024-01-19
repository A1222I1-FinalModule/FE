import style from '../../Assets/css/StatisticalTable.module.css';
import NavbarTable from './NavbarTable';
import { Route, Routes } from 'react-router-dom';
import DailyTable from './DailyTable';
import MonthlyTable from './MonthlyTable';
const StatisticalTable = () => {
    return (
        <div className={style.statistical}>
            {/* <div className={`container`}> */}
                <NavbarTable />
                <Routes>
                    <Route path="*" element={<DailyTable />} />
                    <Route path="daily" element={<DailyTable />} />
                    <Route path="monthly" element={<MonthlyTable />} />
                </Routes>
            {/* </div> */}
        </div>
    )
};

export default StatisticalTable;