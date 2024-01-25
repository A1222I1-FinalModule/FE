import instance from "../../../Config/axiosConfig";
export const getAll = async () => {
    return await instance.post("/api/staff/customer?searchStr=");
};
export const importProduct = async (productBill) => {
    try {
        const response = await instance.post("/api/staff/bill/product", productBill);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else {
            console.error('Unexpected error:', error.message);
            throw error;
        }
    }
};
export const getDiscounts = async (customerCode, totalPrice) => {
    try {
        const response = await instance.get(`/api/staff/discount/search?cusID=${customerCode}&total=${totalPrice}`);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else {
            console.error('Unexpected error:', error.message);
            throw error;
        }
    }
};
export const getBillCode = async () => {
    return await instance.get("/api/staff/bill/code");
};
export const searchCustomer = async (searchStr) => {
    return await instance.post("/api/staff/customer?searchStr=" + searchStr);
};
export const getEmployeeCode = async (user_id) => {
    return await instance.get("/api/staff/employee/code?user_id=" + user_id);
};
export const addBill = async (bill) => {
    try {
        const response = await instance.post("/api/staff/bill/add", bill);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else {
            console.error('Unexpected error:', error.message);
            throw error;
        }
    }
};
