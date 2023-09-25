import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const postCreateNewPost = async (token: string, formData: FormData) => {
  const url = `${API_BASE_URL}/posts/create`;
  const response = await axios.post(url, formData, {
    headers: {
      Authorization: token
    }
  });

  return response;
};

export default postCreateNewPost;
