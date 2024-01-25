import { getUser } from '../../Services/API/EmployeeService';
import { LoginAPI } from '../../Services/API/authService';
import { LOGIN } from '../type';

export const getUserMiddleware = (values) => async (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: { jwt: values },
    });
};
