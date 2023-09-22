import axios from 'axios';
import { API_BASE_URL } from '@/constants/Api';
import { Post, Channel } from '@/types';

interface PostApiProps {
  postId: string;
  token: string;
  postData: FormData;
}

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
    const response = await axios.get<Post[]>(`${url}?${params}`);

    return response.data;
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

const getPost = async (postId: string) => {
  const response = await axios.get<Post>(`${API_BASE_URL}/posts/${postId}`);
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

const putPost = async ({
  postData,
  token
}: Pick<PostApiProps, 'postData' | 'token'>) => {
  console.log(postData.get('postId'));
  console.log(postData.get('title'));
  console.log(postData.get('image'));
  console.log(postData.get('channelId'));
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

const deletePost = async ({
  postId,
  token
}: Pick<PostApiProps, 'postId' | 'token'>) => {
  console.log(postId, token);
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
  getPost,
  getSpecificUserPosts,
  postPost,
  putPost,
  deletePost
};
