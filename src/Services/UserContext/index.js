import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { validateUser } from '../API/authService';
const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [jwt, setJwt] = useState(Cookies.get('jwt'));
    const setUser = async (jwtToken) => {
        setJwt(jwtToken);
        return await getRole();
    };
    const getRole = async (role) => {
        const roles = await jwtDecode(jwt).authorities;
        return roles;
    };
    const isActive = async () => {
        return await validateUser(jwt);
    };
    const value = { getRole, setUser, isActive, jwt };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}

export { useUser, UserProvider };
