import axios from 'axios';
import { User } from '../../types/User';
import { API_BASE_URL } from '../../constants/Api';

const getUserData = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response;
};

const signUpUser = async (userData: {
  email: string;
  password: string;
  fullName: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, userData);
  return response;
};

export { getUserData, signUpUser };
