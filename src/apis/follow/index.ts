import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';

const postFollowUser = async (userId: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/follow/create`,
    { userId },
    {
      headers: {
        // test token
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NDM5MzE1fQ.heYeAayvX78n0NooS-7H4HlbeHCvquXdFl7tRIVkEHM'
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
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NDM5MzE1fQ.heYeAayvX78n0NooS-7H4HlbeHCvquXdFl7tRIVkEHM'
    }
  });
  return response.data;
};

export { postFollowUser, deleteFollowUser };
