import { PostCommentsSection } from './PostComments.style';
import { PostCommentHeader, PostComment } from './';
import { Comment } from '@/types/Comment';

interface PostCommentsProps {
  comments: Comment[];
}

const PostComments = ({ comments }: PostCommentsProps) => {
  return (
    <PostCommentsSection>
      <PostCommentHeader
        postLikeCount={10}
        postCommentCount={20}
      />
      {comments?.map((comment: Comment) => (
        <PostComment
          key={comment._id}
          userId={comment._id}
          text={comment.comment}
        />
      ))}
    </PostCommentsSection>
  );
};

export default PostComments;
