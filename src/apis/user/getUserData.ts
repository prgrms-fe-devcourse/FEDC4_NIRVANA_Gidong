import axios from 'axios';
import { API_BASE_URL } from '../../constants/Api';

const getUserData = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

const signUpUser = async (userData: {
  email: string;
  password: string;
  fullName: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, userData);
  return response;
};

const logInUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/login`, userData);
  return response;
};

export { getUserData, signUpUser, logInUser };
