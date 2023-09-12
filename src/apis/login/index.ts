import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const postLogInUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/login`, userData);
  return response;
};

export default postLogInUser;
