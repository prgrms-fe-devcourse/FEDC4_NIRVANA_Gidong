import { PostCommentsSection } from './PostComments.style';
import { PostCommentHeader, PostComment } from './';

const PostComments = () => {
  return (
    <PostCommentsSection>
      <PostCommentHeader
        postLikeCount={10}
        postCommentCount={20}
      />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
      <PostComment />
    </PostCommentsSection>
  );
};

export default PostComments;
