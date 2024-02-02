import { TYPE } from '../type';
const initUserValues = {
    jwt: "",
    login: false,
    role: [],
    employee: {}
}
const userReducer = (users = initUserValues, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPE.login: {
            return {
                ...users,
                ...payload,
            };
        }
        case TYPE.logout: {
            return {
                ...users,
                ...initUserValues
            }
        }
        default:
            return users;
    }
};

export default userReducer;
