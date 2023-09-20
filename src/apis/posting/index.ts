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
    console.error(error);
  }
};

export default postCreateNewPost;
