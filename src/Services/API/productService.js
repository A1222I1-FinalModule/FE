import instance from "../../Config/axiosConfig";
export const getProducts = async () => {
    try {
        const response = await instance.get('/api/public/getListProduct');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchProducts = async ({ name, page, size, sortBy, sortOrder }) => {
    try {
        const response = await instance.get('/api/public/findByNameProduct', {
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
