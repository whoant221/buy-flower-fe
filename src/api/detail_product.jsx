import { axiosBase, deleteAPI, getAPI, postAPI } from "./axios";

export const getDetailFlower = async (id) => {
    try {
        const data = await getAPI(`/api/v1/flowers/${id}`);
        return data;
    } catch (error) {
        throw error;
    }
};

export const addShopingCart = async (body, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const data = await postAPI(`/api/v1/shopping_carts`, body, config);
        return data;
    } catch (error) {
        throw error;
    }
};

export const getCart = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await axiosBase.get(`/api/v1/shopping_carts`, config);
        return data;
    } catch (error) {
        throw error;
    }
};

export const deleteCart = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await deleteAPI(`/api/v1/shopping_carts/${id}`, config);
        return data;
    } catch (error) {
        throw error;
    }
};

export const addOrder = async (body, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await axiosBase.post(`/api/v1/orders`, body, config);
        return data;
    } catch (error) {
        throw error;
    }
};

export const getOrder = async (params, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await axiosBase.get(`/api/v1/orders`, {
            params, headers: {
                Authorization: `Bearer ${token}`
            }
        },);
        return data;
    } catch (error) {
        throw error;
    }
};


export const deleteOrder = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await deleteAPI(`/api/v1/orders/${id}`, config);
        return data;
    } catch (error) {
        throw error;
    }
};


export const getComment = async (params, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await axiosBase.get(`/api/v1/comments`, {
            params, headers: {
                Authorization: `Bearer ${token}`
            }
        },);
        return data;
    } catch (error) {
        throw error;
    }
};

export const addComment = async (body, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    try {
        const data = await axiosBase.post(`/api/v1/comments`, body, config);
        return data;
    } catch (error) {
        throw error;
    }
};
