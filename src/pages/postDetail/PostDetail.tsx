import styled from '@emotion/styled';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PostCommentSection } from './PostDetail.style';
import { PostCommentInput } from './components';

import { API_BASE_URL } from '@constants/Api';

const PostDetailPage = styled.div`
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
  padding-top: 50px;
  width: 100%;
`;

const channelId = '65017a41dfe8db5726b603a7';
const postId = '6503e31f5f01477ef038671b';

// const getPosts = async () => {
//   try {
//     const res = await axios.get(`${API_BASE_URL}/posts/channel/${channelId}`);
//     console.log(res.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
//
// const getPost = async () => {
//   try {
//     const res = await axios.get(`${API_BASE_URL}/posts/${postId}`);
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  // const postId = '6503e31f5f01477ef038671b';
  const { data } = useQuery(
    ['post', postId],
    () => axios.get(`${API_BASE_URL}/posts/${postId}`),
    { enabled: !!postId, suspense: true }
  );
  const { author, createdAt, title } = data.data;
  return (
    <PostDetailPage>
      <Suspense fallback={<div>불러오는 중...</div>}>
        {/* <PostContentSection
          author={author}
          detail={{ title, createdAt }}
        /> */}
      </Suspense>
      <PostCommentSection>
        <PostCommentInput avatarSrc='' />
      </PostCommentSection>
    </PostDetailPage>
  );
};

export default PostDetail;
