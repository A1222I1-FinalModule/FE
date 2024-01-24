import axios from 'axios';
import React, { useState } from 'react';
import { useUser } from '../Services/UserContext';
import { Navigate } from 'react-router-dom';
import { validateUser } from '../Services/API/authService';
import { Spin } from 'antd';
const PrivateRoute = (props) => {
    const user = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(null);
    const { children } = props;

    if (user && user.jwt) {
        validateUser(user.jwt).then((isValid) => {
            setIsValid(isValid);
            setIsLoading(false);
        });
    } else {
        return props.handleUnauthenticated();
    }

    return isLoading ? <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}><Spin tip="Loading ..." size='large' >
        <div style={{
            padding: "50px",
            background: "rgba(0, 0, 0, 0.05)",
            borderRadius: "4px"
        }} />
    </Spin></div> : isValid === true ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
