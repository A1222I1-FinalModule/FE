import { Route, Routes } from 'react-router';
import Dashboard from '../Pages/DashBoard';
import Info from '../Components/Info/Info';
import { Discount } from '../Components/Discount/listDiscount';
import { ListCustomer } from '../Components/Customer/listCustomer';
import { CreateDiscount } from '../Components/Discount/createDiscount';
import { UpdateDiscount } from '../Components/Discount/updateDiscount';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><Info /> </Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/discount' element={<Dashboard><Discount /></Dashboard>} />
            <Route path='/customer' element={<Dashboard><ListCustomer /></Dashboard>} />
            <Route path='/createDiscount' element={<Dashboard><CreateDiscount /></Dashboard>} />
            <Route path='/updateDiscount/:id' element={<Dashboard><UpdateDiscount/></Dashboard>} />

        </Routes>
    );
};

export default AdminRoutes;