import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

interface PutUpdateUserParams {
  username?: string;
  fullName?: string;
  token: string;
}

const getUser = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

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
        Authorization: token
      }
    }
  );
  return response.data;
};

const postUploadAvatar = async (image: string, token: string) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('isCover', 'true');
  const response = await axios.post(
    `${API_BASE_URL}/users/upload-photo`,
    formData,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

const postUploadCover = async (image: string, token: string) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('isCover', 'true');
  const response = await axios.post(
    `${API_BASE_URL}/users/upload-photo`,
    formData,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

export { getUser, putUpdateUser, postUploadAvatar, postUploadCover };
