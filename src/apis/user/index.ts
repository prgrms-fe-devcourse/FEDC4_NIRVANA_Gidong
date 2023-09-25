import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';
import { User } from '@/types/User';

interface PutUpdateUserParams {
  username?: string;
  fullName?: string;
  token: string;
}

const getUser = async (userId: string) => {
  const response = await axios.get<User>(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

const putUpdateUser = async ({
  username,
  fullName,
  token
}: PutUpdateUserParams) => {
  const response = await axios.put<User>(
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

const postUploadPhoto = async (
  image: File,
  token: string,
  isCover: boolean
): Promise<User> => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('isCover', isCover.toString());
  const response = await axios.post(
    `${API_BASE_URL}/users/upload-photo`,
    formData,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  );
  return response.data;
};

export { getUser, putUpdateUser, postUploadPhoto };
