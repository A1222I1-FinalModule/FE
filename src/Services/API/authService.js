import instance from "../../Config/axiosConfig";
import { Cookies } from 'react-cookie';
export async function LoginAPI(inputs) {

    return await instance.post('/api/auth/login', inputs).then(async (response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.status);
        }
    });
}
export async function validateUser() {
    return await instance.get(`/api/auth/validate`).then((isValid) => isValid.data);
}
export async function logout() {
    const cookie = new Cookies();
    cookie.remove("jwt")
    return await instance.get(`/api/auth/logout`).then((response) => {

        return response
    });
}
export async function changePassword(value) {
    return await instance.post(`/api/auth/changePassword`, value).then(async (response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.status);
        }
    });
}
