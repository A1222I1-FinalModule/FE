// First we need to import axios.js
import axios from 'axios';
import { Cookies } from 'react-cookie';
const instance = axios.create({
    withCredentials: true,
    //baseURL: 'http://54.254.193.131:8080',
    baseURL: 'http://localhost:8080',
    proxy: 'http://localhost:8080',
    Headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(function (config) {
    const cookie = new Cookies();
    const token = cookie.get('jwt')
    console.log(token + " !!!!!!!!!!!!!!!!!");
    if (token != null) {
        config.headers['Authorization'] = 'Bearer ' + token;

    }
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Where you would set stuff like your 'Authorization' header, etc ...

// Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default instance;