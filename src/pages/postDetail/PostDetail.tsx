import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PostCommentInput, PostComments, PostContent } from './components';
import { PostDetailPage } from './PostDetail.style';
import { getPost } from '@apis/posts';

export const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();

  const { data, refetch } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: async () => getPost(postId),
    enabled: !!postId
  });

  console.log(data);

  return (
    <PostDetailPage>
      <PostContent
        author={data?.author}
        title={data?.title}
        createdAt={data?.createdAt}
      />
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
