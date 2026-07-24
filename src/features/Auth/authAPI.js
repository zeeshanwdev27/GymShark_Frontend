// import api from "@/utils/api";
import axios from "axios";

const baseURL= import.meta.env.VITE_API_URL;



export const loginAPI = async ({ formData }) => {
  const response = await axios.post(`${baseURL}/customerauth/login`, formData, { withCredentials: true });
  return response.data.user;
};


export const signupAPI = async ({ formData }) => {
  const response = await axios.post(`${baseURL}/customerauth/signup`, formData, { withCredentials: true });
  return response.data.user;
};


export const meAPI = async () => {
  const response = await axios.get(`${baseURL}/customerauth/me`, { withCredentials: true });
  return response.data.user;
};