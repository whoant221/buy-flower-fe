import axios from 'axios';

const instance = axios.create({
    baseURL: "http://94.100.26.30:30001",
    timeout: 30000,
    maxContentLength: 1000000,
    maxBodyLength: 1000000,
});

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        };
    }

    return config;
}, function (error) {

    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {

    return response;
}, function (error) {

    return Promise.reject(error);
});

export default instance;
