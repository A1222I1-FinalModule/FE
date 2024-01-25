import instance from "../../Config/axiosConfig";
export const EmployeeService = {
    getEmployeeSaleTop: async () => {
        const res = await instance.get(`/api/admin/employee-top`);
        return res.data;
    },
};
export async function getUser() {
    const res = await instance.get(`/api/public/info`, { withCredentials: true });
    return res.data;
}
export default EmployeeService;
