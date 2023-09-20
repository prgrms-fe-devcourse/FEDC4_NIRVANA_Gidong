import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';

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

export { postFollowUser, deleteFollowUser };
