import axios from 'axios';
import React, { useState } from 'react';
import { useUser } from '../Services/UserContext';
import { Navigate } from 'react-router-dom';
const PrivateRoute = (props) => {
    const user = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(null);
    const { children } = props;

    if (user && user.jwt) {
        axios(`/api/auth/validate`, 'get', user.jwt).then((isValid) => {
            setIsValid(isValid);
            setIsLoading(false);
        });
    } else {
        return <Navigate to="/login" />;
    }

    return isLoading ? <div>Loading...</div> : isValid === true ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
