import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [jwt, setJwt] = useState(Cookies.get('jwt'));
    const [role, setRole] = useState([]);
    const setUser = async (jwtToken) => {
        setJwt(jwtToken);
        const roles = await jwtDecode(jwtToken).authorities;
        setRole(roles);
        return roles;
    };
    const value = { jwt, setJwt, role, setUser };
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
