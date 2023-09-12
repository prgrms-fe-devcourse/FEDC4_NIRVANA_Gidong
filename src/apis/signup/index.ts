import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const postSignUpUser = async (userData: {
  email: string;
  password: string;
  fullName: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, userData);
  return response;
};

export default postSignUpUser;
