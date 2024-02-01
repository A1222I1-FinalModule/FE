// import * as httpRequest from '../utils/httpRequest';
import axios from 'axios';
export const getProducts = async () => {
    try {
        const response = await axios.get('/api/public/getListProduct');

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchProducts = async ({ name, page, size, sortBy, sortOrder }) => {
    try {
        const response = await axios.get('/api/public/findByNameProduct', {
            params: {
                name,
                page,
                size,
                sortBy,
                sortOrder,
            },
        });

        return response.data.content;
    } catch (error) {
        console.log(error);
    }
};

export const searchProductCategories = async (id) => {
    try {
        const response = await axios.get('/api/public/findByProductCategories', {
            params: {
                id,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
