import axios from 'axios';

export const findAllCustomerType = async () => {
    try {
        let response = await axios.get('/api/admin/list-customertype');
        console.log('Thành công', response);
        return response.data;
    } catch (error) {
        console.log('Thất bại', error);
    }
};

export const createCustomer = async (value) => {
    const response = await axios.post('/api/admin/insert-customer', value);
    console.log('Thành công', response);
    return response.data;
};

export const updateCustomer = async (id, value) => {
    const response = await axios.put(`/api/admin/update-customer/${id}`, value);
    console.log('Thành công', response);
    return response.data;
};

export const detailCustomer = async (id) => {
    try {
        const response = await axios.get(`/api/admin/detail/${id}`);
        console.log('Thành công', response);
        return response.data;
    } catch (error) {
        console.log('Thất bại', error);
    }
};
