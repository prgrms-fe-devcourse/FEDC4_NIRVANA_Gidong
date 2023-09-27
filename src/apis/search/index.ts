import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';
import { SearchEditedPost, User } from '@/types';

const searchUser = async (query: string) => {
  const response = await axios.get<User[]>(
    `${API_BASE_URL}/search/users/${query}`
  );

  return response.data;
};

const searchAll = async (query: string) => {
  const response = await axios.get<(User | SearchEditedPost)[]>(
    `${API_BASE_URL}/search/all/${query}`
  );

  return response.data;
};

export { searchUser, searchAll };
