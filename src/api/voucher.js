import axios from './axiosInstance.js';

export const getVouchersByPrice = () => {
    return axios.get(`api/v1/vouchers`);
};



export const validVoucher = (code, price) => {
    return axios.post(`api/v1/vouchers/valid_price`, {
        code, price
    });
};

export const getPointVoucher = () => {
    return axios.get('/api/v1/users')
}

export const getVoucherCanBeExchange = () => {
    return axios.get('/api/v1/vouchers/exchange')
}

export const exchangeVoucher = (body) => {
    return axios.post('/api/v1/vouchers/exchange', body)
}
