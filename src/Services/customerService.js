import axios from "axios";

export const createCustomer = async (value) => {
    try {
        const response = await axios.post('/api/admin/insert-customer', value);
        console.log("Thanh cong", response);
        return response;
    } catch (error) {
        console.log("loi", error);
    }
};

export const updateCustomer = async (id, value) => {
    try {
        const response = await axios.post(`/api/admin/update-customer/${id}`, value);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const detailCustomer = async (id) => {
    try {
        const response = await axios.get(`/api/admin/detail/${id}`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
