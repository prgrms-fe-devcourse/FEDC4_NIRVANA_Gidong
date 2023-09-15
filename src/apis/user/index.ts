import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const getUser = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

interface PutUpdateUserParams {
  username?: string;
  fullName?: string;
  token: string;
}
const putUpdateUser = async ({
  username,
  fullName,
  token
}: PutUpdateUserParams) => {
  const response = await axios.put(
    `${API_BASE_URL}/settings/update-user`,
    {
      fullName,
      username
    },
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  );
  return response.data;
};

export { getUser, putUpdateUser };
