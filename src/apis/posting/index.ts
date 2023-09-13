import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const postCreateNewPost = async (token: string, formData: FormData) => {
  const response = await axios.post(`${API_BASE_URL}/posts/create`, formData, {
    headers: {
      Authorization: token
    }
  });
  return response;
};

export default postCreateNewPost;
