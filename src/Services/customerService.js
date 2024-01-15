import * as httpRequest from '../utils/httpRequest';

export const createCustomer = async (value) => {
    try {
        const response = await httpRequest.post('/api/admin/insert-customer', value);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateCustomer = async (id, value) => {
    try {
        const response = await httpRequest.post(`/api/admin/update-customer/${id}`, value);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const detailCustomer = async (id) => {
    try {
        const response = await httpRequest.get(`/api/admin/detail/${id}`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
