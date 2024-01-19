import axios from 'axios';
const BASE_URL = `/api`;
export const EmployeeService = {
    getEmployeeSaleTop: async () => {
        const res = await axios.get(`${BASE_URL}/admin/employee-top`);
        return res.data;
    },
};
export async function getUser(role) {
    let API_URL = '/api';
    switch (role) {
        case 'ROLE_ADMIN':
            API_URL += '/admin';
            break;
        case 'ROLE_SALE':
            API_URL += '/saler';
            break;
        case 'ROLE_WAREHOUSE':
            API_URL += '/warehouse';
            break;
        default:
            break;
    }
    const res = await axios.get(`${API_URL}/info`);
    return res.data;
}
export default EmployeeService;
