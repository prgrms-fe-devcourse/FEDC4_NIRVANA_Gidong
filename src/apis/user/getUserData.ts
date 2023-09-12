import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const getUserData = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export default getUserData;
