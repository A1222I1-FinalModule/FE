import { LOGIN } from '../type';

const userReducer = (users = { jwt: "", }, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN: {
            return {
                ...users,
                ...payload,
            };
        }
        default:
            return users;
    }
};

export default userReducer;
