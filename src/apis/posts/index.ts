import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';
import { Post } from '@/types';

const getPosts = async (channelId: string, offset = 0, limit = 10) => {
  try {
    const url = `${API_BASE_URL}/posts/channel/${channelId}`;
    const params = new URLSearchParams({
      offset: `${offset}`,
      limit: `${limit}`
    });
    const response = await axios.get<Post[]>(`${url}?${params}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getPosts };
