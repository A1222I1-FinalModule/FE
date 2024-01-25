import instance from "../../Config/axiosConfig";
const BASE_URL = `/api/admin`;
const WAREHOUSE_URL = `/api/warehouse`

export const getProducts = async () => {
    try {
        const response = await instance.get('/api/public/list-product');

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchProducts = async (name) => {
    try {
        const response = await instance.get('/api/public/findByNameProduct', {
            params: {
                name,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchProductCategories = async (id) => {
    try {
        const response = await instance.get('/api/public/findByProductCategories', {
            params: {
                id,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const updateQuantityByAdmin = async (value) => {
    const respone = await instance.post(`${BASE_URL}/update-quantity`, value)
    return respone.status;
}
export const updateQuantityByWarehouse = async (value) => {
    const respone = await instance.post(`${WAREHOUSE_URL}/update-quantity`, value)
    return respone.status;
}
