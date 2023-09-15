import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

interface PutUpdatePasswordParams {
  password: string;
  token: string;
}

const putUpdatePassword = async ({
  password,
  token
}: PutUpdatePasswordParams) => {
  const response = await axios.put(
    `${API_BASE_URL}/settings/update-password`,
    {
      password
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

export default putUpdatePassword;
