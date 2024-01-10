import "./App.css";
import MainRouter from "./Routes";
import DailyStatisticalTable from "./templates/DailyStatisticalTable";
import GetInput from "./templates/GetInput";

function App() {
    return (
        <>
            {/* <MainRouter /> */}
            {/* <DailyStatisticalTable /> */}
            <GetInput userId={123} inputDate="2022-01-01" />
        </>
    );
}

export default App;