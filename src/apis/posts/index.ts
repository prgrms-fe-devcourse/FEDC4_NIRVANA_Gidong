import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';
import { Post, Channel } from '@/types';

const getPosts = async (
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

const getChannels = async (channelName: string) => {
  const response = await axios.get<Channel>(
    `${API_BASE_URL}/channel/${channelName}`
  );
  return response.data;
};

const getSpecificUserPosts = async (
  authorId: string,
  offset?: number,
  limit?: number
) => {
  const url = `${API_BASE_URL}/posts/author/${authorId}`;
  const params = new URLSearchParams({
    offset: `${offset}`,
    limit: `${limit}`
  });
  const response = await axios.get<Post[]>(`${url}?${params}`);
  return response.data;
};

const postPost = async (postData: FormData, token: string) => {
  const response = await axios.post<Post>(
    `${API_BASE_URL}/posts/create`,
    postData,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

const putPost = async (postData: FormData, token: string) => {
  const response = await axios.put<Post>(
    `${API_BASE_URL}/posts/update`,
    postData,
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

const deletePost = async (postId: string, token: string) => {
  const response = await axios.delete<Post>(`${API_BASE_URL}/posts/delete`, {
    data: { id: postId },
    headers: {
      Authorization: token
    }
  });
  return response.data;
};
export {
  getChannels,
  getPosts,
  getSpecificUserPosts,
  postPost,
  putPost,
  deletePost
};
