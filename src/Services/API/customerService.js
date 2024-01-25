import instance from "../../Config/instanceConfig";
export const findAllCustomerType = async () => {
    try {
        let response = await instance.get('/api/admin/list-customertype');
        console.log('Thành công', response);
        return response.data;
    } catch (error) {
        console.log('Thất bại', error);
    }
};

export const createCustomer = async (value) => {
    try {
        const response = await instance.post('/api/admin/insert-customer', value);
        console.log('Thành công', response);
        return response.data;
    } catch (error) {
        console.log('Thất bại', error);
    }
};

export const updateCustomer = async (id, value) => {
    try {
        const response = await instance.put(`/api/admin/update-customer/${id}`, value);
        console.log('Thành công', response);
        return response.data;
    } catch (error) {
        console.log('Thất bại', error);
    }
};

export const detailCustomer = async (id) => {
    try {
        const response = await instance.get(`/api/admin/detail/${id}`);
        console.log('Thành công', response);
        return response.data;
    } catch (error) {
        console.log('Thất bại', error);
    }
};
