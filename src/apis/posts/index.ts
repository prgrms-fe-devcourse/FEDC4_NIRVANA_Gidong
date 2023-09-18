import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';

export const getPosts = async(channelId: string) => {
  try {
    const url = `${API_BASE_URL}/posts/channel/${channelId}`
    const response = axios.get(url);

    return response;
  } catch (error) {
    console.log(error);
  }
}