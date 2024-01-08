import * as httpRequest from '~/utils/httpRequest';

export const getProducts = async () => {
    try {
        const response = await httpRequest.get('admin/list-product');

        return response;
    } catch (error) {
        console.log(error);
    }
};
