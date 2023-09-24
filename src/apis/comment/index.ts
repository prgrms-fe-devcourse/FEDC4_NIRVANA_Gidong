import axios from 'axios';
import { Comment } from '@/types/Comment';
import { API_BASE_URL } from '@constants/Api';

interface PostCommentProps {
  postId: string;
  comment: string;
  token: string;
}

interface DeleteCommentProps {
  id: string;
  token: string;
}

const postComment = async ({ postId, comment, token }: PostCommentProps) => {
  const response = await axios.post<Comment>(
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

const deleteComment = async ({ id, token }: DeleteCommentProps) => {
  const response = await axios.delete<Comment>(
    `${API_BASE_URL}/comments/delete`,
    {
      data: { id },
      headers: {
        Authorization: token
      }
    }
  );
  return response.data;
};

export { postComment, deleteComment };
