import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PostCommentInput, PostComments } from './components';
import { PostDetailPage } from './PostDetail.style';
import { API_BASE_URL } from '@constants/Api';
import { Post } from '@/types/Post';

export const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  // const postId = '6503e31f5f01477ef038671b';
  const { data } = useQuery(
    ['post', postId],
    () => axios.get<Post>(`${API_BASE_URL}/posts/${postId}`),
    { enabled: !!postId, suspense: true }
  );

  return (
    <PostDetailPage>
      <Suspense fallback={<div>불러오는 중...</div>}>
        {/* <PostContentSection
          author={author}
          detail={{ title, createdAt }}
        /> */}
      </Suspense>
      <PostCommentInput
        postId={postId}
        avatarSrc=''
      />
      <PostComments comments={data.data.comments} />
    </PostDetailPage>
  );
};

export default PostDetail;
