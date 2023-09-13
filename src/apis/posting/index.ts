import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const postCreateNewPost = async (token: string, formData: FormData) => {
  const response = await axios.post(`${API_BASE_URL}/posts/create`, {
    headers: {
      Authorization: `bearer ${token}`
    },
    data: {
      formData
    }
  });
  return response;
};

export default postCreateNewPost;
