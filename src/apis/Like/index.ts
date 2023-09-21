import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';
import { Like } from '@/types/Like';

const postLike = async (postId: string, token: string) => {
  const response = await axios.post<Like>(
    `${API_BASE_URL}/likes/create`,
    { postId },
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

const deleteLike = async (postId: string, token: string) => {
  console.log(postId, token);
  const response = await axios.delete<Like>(`${API_BASE_URL}/likes/delete`, {
    data: { id: postId },
    headers: {
      Authorization: token
    }
  });
  return response.data;
};

export { postLike, deleteLike };
