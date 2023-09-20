import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';

const searchUser = async (query: string) => {
  const response = await axios.get(`${API_BASE_URL}/search/users/${query}`);

  return response.data;
};

const searchPost = async (query: string) => {
  console.log(query);
  const response = await axios.get(`${API_BASE_URL}/search/all/${query}`);
  return response.data;
};

export { searchUser, searchPost };
