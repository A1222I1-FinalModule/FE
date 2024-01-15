// import * as httpRequest from '../utils/httpRequest';
import axios from 'axios';
export const getProducts = async () => {
    try {
        const response = await axios.get('/api/admin/list-product');

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
