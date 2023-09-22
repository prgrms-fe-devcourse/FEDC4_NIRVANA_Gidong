import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PostCommentInput, PostComments, PostContent } from './components';
import { PostDetailPage } from './PostDetail.style';
import { getPost } from '@apis/posts';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import { GetMyLike } from './utils';
import formatDate from '@utils/formatDate';

export const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: async () => getPost(postId),
    enabled: !!postId
  });

  const [{ token, _id }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  console.log(data, isLoading);

  return (
    <PostDetailPage>
      <PostContent
        author={data?.author}
        title={data?.title}
        createdAt={formatDate(data?.createdAt)}
      />
      <PostCommentInput
        postId={postId}
        token={'Bearer ' + token}
        avatarSrc=''
        refetch={() => {
          refetch();
        }}
      />
      <PostComments
        postId={postId}
        currentUserId={_id}
        token={'Bearer ' + token}
        refetch={() => {
          refetch();
        }}
        comments={data?.comments}
        myLike={GetMyLike(data?.likes)}
        likeCounts={data?.likes?.length}
      />
    </PostDetailPage>
  );
};

export default PostDetail;
