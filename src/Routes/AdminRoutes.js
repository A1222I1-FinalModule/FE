import { Route, Routes } from 'react-router';
import Dashboard from '../Pages/DashBoard';
import Info from '../Components/Info/Info';
import { Discount } from '../Components/Discount/listDiscount';
import { ListCustomer } from '../Components/Customer/listCustomer';
import { CreateDiscount } from '../Components/Discount/createDiscount';
import { UpdateDiscount } from '../Components/Discount/updateDiscount';

import CustomerCreate from '../Components/Customer/CustomerCreate';
import CustomerUpdate from '../Components/Customer/CustomerUpdate';
import ContentAdmin from '../Components/ContentAdmin';
import NotificationSave from '../Components/Notification/NotificationSave';
import ProductList from '../Components/product/ProductList'
const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard><ContentAdmin /> </Dashboard>} />
            <Route path='/report' element={<Dashboard><ContentAdmin /> </Dashboard>} />
            <Route path='/info' element={<Dashboard><Info /></Dashboard>} />
            <Route path='/goods' element={<Dashboard><ProductList /></Dashboard>} />
            <Route path='/discount' element={<Dashboard><Discount /></Dashboard>} />
            <Route path='/report' element={<Dashboard><ContentAdmin /></Dashboard>} />
            <Route path='/customer' element={<Dashboard><ListCustomer /></Dashboard>} />
            <Route path='/createDiscount' element={<Dashboard><CreateDiscount /></Dashboard>} />
            <Route path='/updateDiscount/:id' element={<Dashboard><UpdateDiscount /></Dashboard>} />
            <Route path='/customer/create' element={<Dashboard><CustomerCreate /></Dashboard>} />
            <Route path='/customer/update/:id' element={<Dashboard><CustomerUpdate /></Dashboard>} />
        </Routes>
    );
};

export default AdminRoutes;