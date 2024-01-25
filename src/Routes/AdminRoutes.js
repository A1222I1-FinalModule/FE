import { Route, Routes } from 'react-router';
import Dashboard from '../Pages/DashBoard';
import Info from '../Components/Info/Info';
import { Discount } from '../Components/Discount/listDiscount';
import ContentAdmin from '../Components/ContentAdmin'
import NotificationSave from '../Components/Notification/NotificationSave';
const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><Info /> </Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/discount' element={<Dashboard><Discount /></Dashboard>} />
            <Route path='/report' element={<Dashboard><ContentAdmin /></Dashboard>} />
            <Route path='/notification' element={<Dashboard><NotificationSave /></Dashboard>} />
        </Routes>
    );
};

export default AdminRoutes;