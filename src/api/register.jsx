import { postAPI } from "./axios";

export const registerUser = async (body) => {
  try {
    const data = await postAPI(`/api/v1/sessions/register`, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (body) => {
  try {
    const data = await postAPI(`/api/v1/sessions/login`, body);
    return data;
  } catch (error) {
    throw error;
  }
};
