import { jwtDecode } from "jwt-decode";
import { getUser } from "../../Services/API/EmployeeService";
import { TYPE } from "../type";
export const handleLoginMiddleware = async (values) => async (dispatch) => {
    const res = await getUser();
    const roles = await jwtDecode(values).authorities;
    await dispatch({
        type: TYPE.login,
        payload: { jwt: values, login: true, employee: res, role: roles },
    });
};
export const handleLogoutMiddleware = () => async (dispatch) => {
    dispatch({
        type: TYPE.logout,
        payload: {}
    })
}
