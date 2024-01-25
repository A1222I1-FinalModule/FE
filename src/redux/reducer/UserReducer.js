import { LOGIN } from '../type';
const initUser = {
    isLogged: false,
};
const userReducer = (initUser, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN: {
            return {
                ...initUser,
                ...payload,
                isLogged: true,
            };
        }
        default:
            return initUser;
    }
};

export default userReducer;
