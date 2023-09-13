import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';
import { Follow } from '@types';

const postFollowUser = async (userId: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/follow/create`,
    { userId },
    {
      headers: {
        // test token
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NTczMDA5fQ.gWqpTse9wQarIavekn0M2H6RTVlm9IBZ8MZrC6FvYqA'
      }
    }
  );
  return response.data;
};

const deleteFollowUser = async (userId: string) => {
  const response = await axios.delete(`${API_BASE_URL}/follow/delete`, {
    data: { id: userId },
    headers: {
      // test token
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NTczMDA5fQ.gWqpTse9wQarIavekn0M2H6RTVlm9IBZ8MZrC6FvYqA'
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
