import { getAPI, postAPI, putAPI } from "./axios";
import Axios from "axios";



export const getFlower = async (param) => {
    try {
        const data = await getAPI(`/api/v1/flowers`, param);
        return data;
    } catch (error) {
        throw error;
    }
};


export const getCategory = async () => {
    try {
        const data = await getAPI(`/api/v1/categories`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const getDetailCategory = async (id) => {
    try {
        const data = await getAPI(`/api/v1/categories/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const getColor = async () => {
    try {
        const data = await getAPI(`/api/v1/vars/color`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const editDetailCategory = async (param, token) => {
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

export const forgotPassword = async (body) => {
    try {
        const data = await postAPI(`/api/v1/sessions/reset_password`, body);
        return data;
    } catch (error) {
        throw error;
    }
};


export const getinfoUser = async (token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const res = Axios.get('http://194.233.92.2:30001/api/v1/users', config).then((res) => res.data);

        return res;
    } catch (error) {
        throw error;
    }
};

export const getBuds = async () => {
    try {
        const data = await getAPI(`/api/v1/buds`);
        return data;
    } catch (error) {
        throw error;
    }
};

