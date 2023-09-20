import axios from 'axios';
import { API_BASE_URL } from '@constants/Api';

const postComment = async (postId: string, comment: string, token: string) => {
  const response = await axios.post(
    `${API_BASE_URL}/comments/create`,
    { postId, comment },
    {
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

const deleteComment = async (postId: string, token: string) => {
  const response = await axios.delete(`${API_BASE_URL}/comments/delete`, {
    data: { id: postId },
    headers: {
      Authorization: token
    }
  });
  return response.data;
};

export { postComment, deleteComment };
