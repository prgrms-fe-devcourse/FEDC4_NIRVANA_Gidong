import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';
import { Follow } from '@/types';

const postFollowUser = async (userId: string, token: string) => {
  const response = await axios.post<Follow>(
    `${API_BASE_URL}/follow/create`,
    { userId },
    {
      headers: {
        Authorization: `bearer ${token}`
      }
    }
  );
  return response.data;
};

const deleteFollowUser = async (dataId: string, token: string) => {
  const response = await axios.delete<Follow>(`${API_BASE_URL}/follow/delete`, {
    data: { id: dataId },
    headers: {
      Authorization: `bearer ${token}`
    }
  });
  return response.data;
};

export { postFollowUser, deleteFollowUser };
