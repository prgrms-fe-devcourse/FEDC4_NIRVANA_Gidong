import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';
import { Follow } from '@types';

const postFollowUser = async (userId: string, token: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/follow/create`,
    { userId },
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

const deleteFollowUser = async (userId: string, token: string) => {
  const response = await axios.delete(`${API_BASE_URL}/follow/delete`, {
    data: { id: userId },
    headers: {
      Authorization: token
    }
  });
  return response.data;
};

const getFollowUser = async (userId: string, element: Follow) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return {
    _id: element._id,
    user: response.data,
    follower: element.user
  };
};

export { postFollowUser, deleteFollowUser, getFollowUser };
