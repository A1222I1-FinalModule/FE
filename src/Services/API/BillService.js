
import axios from 'axios';
const BASE_URL = `/api/admin`;
const BillService = {
    getTopOrderRecent: async () =>{
        const res  = await axios.get(`${BASE_URL}/orders-top`);
        return res.data;
    },
    getCustomerGrowth: async () =>{
        const res  = await axios.get(`${BASE_URL}/customer-growth`);
        return res.data;
    },
    getOrderGrowth: async () =>{
        const res  = await axios.get(`${BASE_URL}/order-growth`);
        return res.data;
    },
    getMonthRevenue: async () =>{
        const res  = await axios.get(`${BASE_URL}/month/revenue`);
        return res.data;
    },
    getWeekRevenue: async () =>{
        const res  = await axios.get(`${BASE_URL}/weekly/revenue`);
        return res.data;
    }
}
export default BillService;