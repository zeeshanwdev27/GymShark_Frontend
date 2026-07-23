// import api from "@/utils/api";
import axios from "axios";

const baseURL= import.meta.env.VITE_API_URL;

export const fetchProductsAPI = async ({ page, limit, gender, category }) => {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  params.append('limit', limit.toString());
  if (gender) params.append('gender', gender);
  if (category) params.append('category', category);

  const response = await axios.get(`${baseURL}/customer/allProducts?${params.toString()}`);
  return response.data;
};


export const fetchSingleProductAPI = async ({ productId}) => {

  const response = await axios.get(`${baseURL}/customer/getProduct/${productId}`);
  // console.log(response.data);
  return response.data;
};