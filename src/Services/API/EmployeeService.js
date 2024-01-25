import instance from "../../Config/axiosConfig";
export const EmployeeService = {
    getEmployeeSaleTop: async () => {
        const res = await instance.get(`/api/admin/employee-top`);
        return res.data;
    },
};
export async function getUser() {
    try {

        const res = await instance.get(`/api/public/info`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
export default EmployeeService;
