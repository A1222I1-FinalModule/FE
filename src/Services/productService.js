import axios from 'axios';
export const getProducts = async () => {
    try {
        const response = await axios.get('/api/public/list-product');

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchProducts = async (name) => {
    try {
        const response = await axios.get('/api/public/findByNameProduct', {
            params: {
                name,
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// export const searchProductCategories = async (id) => {
//     try {
//         const response = await axios.get('/api/public/findByProductCategories', {
//             params: {
//                 id,
//             },
//         });

//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
