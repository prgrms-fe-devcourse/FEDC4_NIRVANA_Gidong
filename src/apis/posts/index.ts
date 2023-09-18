import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

export const getPosts = async (
  channelId: string,
  offset: number = 0,
  limit: number = 10
) => {
  try {
    const url = `${API_BASE_URL}/posts/channel/${channelId}`;
    const params = new URLSearchParams({
      offset: `${offset}`,
      limit: `${limit}`
    });
    const response = axios.get(`${url}?${params}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
