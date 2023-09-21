import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';
import { User, Post } from '@/types';

const searchUser = async (query: string) => {
  const response = await axios.get<User[]>(
    `${API_BASE_URL}/search/users/${query}`
  );

  return response.data;
};

const searchPost = async (query: string) => {
  const response = await axios.get<(User | Post)[]>(
    `${API_BASE_URL}/search/all/${query}`
  );

  return response.data;
};

export { searchUser, searchPost };
