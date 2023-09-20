import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PostCommentInput, PostComments } from './components';
import { PostDetailPage } from './PostDetail.style';
import { getPost } from '@apis/posts';

export const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();

  const { data, refetch } = useQuery(
    ['postDetail', postId],
    () => getPost(postId),
    { enabled: !!postId }
  );

  console.log(data);

  return (
    <PostDetailPage>
      <PostCommentInput
        postId={postId}
        avatarSrc=''
        refetch={() => {
          refetch();
        }}
      />
      <PostComments comments={data?.comments} />
    </PostDetailPage>
  );
};

export default PostDetail;
