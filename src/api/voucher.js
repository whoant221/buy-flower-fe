import axios from './axiosInstance.js';

export const getVouchersByPrice = price => {
    return axios.get(`api/v1/vouchers?price=${price}`);
};



export const validVoucher = (code, price) => {
    return axios.post(`api/v1/vouchers/valid_price`, {
        code, price
    });
};

export const getPointVoucher = () => {
    return axios.get('/api/v1/users')
}
