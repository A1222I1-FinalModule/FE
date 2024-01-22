import axios from 'axios';
const BASE_URL = `/api/admin`;
const WAREHOUSE_URL = `/api/warehouse`;

export const getProducts = async () => {
    try {
        const response = await axios.get('/api/public/list-product');

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateQuantityByAdmin = async (value) => {
    const respone = await axios.post(`${BASE_URL}/update-quantity`, value)
    return respone.status;
}
export const updateQuantityByWarehouse = async (value) => {
    const respone = await axios.post(`${WAREHOUSE_URL}/update-quantity`, value)
    return respone.status;
}
