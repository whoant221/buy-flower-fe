import Axios from "axios";

export const axiosBase = Axios.create({
    baseURL: "https://api-buy-flower.votuan.xyz",
    timeout: 30000,
    maxContentLength: 1000000,
    maxBodyLength: 1000000,
});

export const getAPI = (url, params, config) =>
    axiosBase.get(url, { params }).then((res) => res.data);

export const postAPI = (url, data, config) =>
    axiosBase.post(url, data, config).then((res) => res.data);

export const putAPI = (url, data, config) => axiosBase.put(url, data, config).then((res) => res.data);

export const deleteAPI = (url, params, config) =>
    axiosBase.delete(url, params).then((res) => res.data);