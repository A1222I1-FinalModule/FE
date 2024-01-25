import axios from 'axios';
const BASE_URL = `/api`;
export const EmployeeService = {
    getEmployeeSaleTop: async () => {
        const res = await axios.get(`${BASE_URL}/admin/employee-top`);
        return res.data;
    },
};
export async function getUser() {
    const res = await axios.get(`/api/public/info`);
    return res.data;
}
export default EmployeeService;
