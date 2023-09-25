import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

const postCreateNewPost = async (token: string, formData: FormData) => {
  try {
    const url = `${API_BASE_URL}/posts/create`;
    const { data } = await axios.post(url, formData, {
      headers: {
        Authorization: token
      }
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default postCreateNewPost;
