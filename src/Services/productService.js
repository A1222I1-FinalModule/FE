// import * as httpRequest from '../utils/httpRequest';
import axios from 'axios';
export const getProducts = async () => {
    try {
        const response = await axios.get('/api/public/list-product');

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const update = async (quantity, value) => {
    const respone = await axios.post(`/api/admin/update-quantity/${quantity}`, value)
    return respone.status;
}
