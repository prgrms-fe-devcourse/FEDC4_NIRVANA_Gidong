import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const postCreateNewPost = async (token: string, formData: FormData) => {
  try {
    return await axios.post(`${API_BASE_URL}/posts/create`, formData, {
      headers: {
        Authorization: token
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default postCreateNewPost;
