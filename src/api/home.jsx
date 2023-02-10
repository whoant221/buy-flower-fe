import { getAPI, postAPI, putAPI } from "./axios";
import axios from './axiosInstance.js';


export const getFlower = async(param) => {
    try {
        const data = await getAPI(`/api/v1/flowers`, param);
        return data;
    } catch (error) {
        throw error;
    }
};


export const getCategory = async() => {
    try {
        const data = await getAPI(`/api/v1/categories`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const getDetailCategory = async(id) => {
    try {
        const data = await getAPI(`/api/v1/categories/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const getColor = async() => {
    try {
        const data = await getAPI(`/api/v1/vars/color`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const editDetailCategory = async(param, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await putAPI(`/api/v1/users/change_info`, param, config);
        return data;
    } catch (error) {
        throw error;
    }
};

export const forgotPassword = async(body) => {
    try {

        const data = await postAPI(`/api/v1/sessions/reset_password`, body);
        return data;
    } catch (error) {
        throw error;
    }
};


export const getinfoUser = async(token) => {
    return axios.get('/api/v1/users')

};

export const getBuds = async() => {
    try {
        return await getAPI(`/api/v1/buds`);
    } catch (error) {
        throw error;
    }
};

