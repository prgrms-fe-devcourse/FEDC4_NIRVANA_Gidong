import { PostCommentsSection } from './PostComments.style';
import { PostCommentHeader, PostComment } from './';
import { Comment } from '@/types/Comment';

interface PostCommentsProps {
  postId: string;
  token: string;
  currentUserId: string;
  comments: Comment[];
  refetch: () => void;
  likedThisPost: boolean;
  likeCounts: number;
}

const PostComments = ({
  postId,
  token,
  currentUserId,
  refetch,
  comments,
  likedThisPost,
  likeCounts
}: PostCommentsProps) => {
  return (
    <PostCommentsSection>
      <PostCommentHeader
        postId={postId}
        token={token}
        refetch={refetch}
        likedThisPost={likedThisPost}
        likeCounts={likeCounts}
        postCommentCount={comments?.length}
      />
      {comments?.map((comment: Comment) => (
        <PostComment
          key={comment._id}
          id={comment._id}
          token={token}
          author={comment.author}
          text={comment.comment}
          myComment={comment.author._id === currentUserId}
          refetch={refetch}
        />
      ))}
    </PostCommentsSection>
  );
};

export default PostComments;
