import axios from "axios";

const API_URL = "http://localhost:3336/api";

export const signup = (data) => axios.post(`${API_URL}/signup`, data);
export const signin = (data) => axios.post(`${API_URL}/signin`, data);
