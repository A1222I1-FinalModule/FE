
import axios from 'axios';
const BASE_URL = `/api/admin`;
export const EmployeeService = {
    getEmployeeSaleTop : async () =>{
        const res  = await axios.get(`${BASE_URL}/employee-top`);
        return res.data;
    }
}
export default EmployeeService;