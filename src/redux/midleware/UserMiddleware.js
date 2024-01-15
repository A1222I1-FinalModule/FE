import { getUser } from '../../Services/API/EmployeeService';
import { LOGIN } from '../type';

export const getUserMiddleware = (role) => async (dispatch) => {
    const res = await getUser(role);
    dispatch({
        type: LOGIN,
        payload: res,
    });
};
