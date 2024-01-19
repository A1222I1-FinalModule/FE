import axios from 'axios';
const BASE_URL = `/api/admin`;
const SALER_URL = `/api/saler`;
const WAREHOUSE_URL = `/api/warehouse`;

export const getAll = async () => {
    try {
        const response = await axios.get(`${SALER_URL}/bill`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

const BillService = {
    getTopOrderRecent: async () => {
        const res = await axios.get(`${BASE_URL}/orders-top`);
        return res.data;
    },
    getCustomerGrowth: async () => {
        const res = await axios.get(`${BASE_URL}/customer-growth`);
        return res.data;
    },
    getOrderGrowth: async () => {
        const res = await axios.get(`${BASE_URL}/order-growth`);
        return res.data;
    },
    getMonthRevenue: async () => {
        const res = await axios.get(`${BASE_URL}/month/revenue`);
        return res.data;
    },
    getWeekRevenue: async () => {
        const res = await axios.get(`${BASE_URL}/weekly/revenue`);
        return res.data;
    }
}
export default BillService;
