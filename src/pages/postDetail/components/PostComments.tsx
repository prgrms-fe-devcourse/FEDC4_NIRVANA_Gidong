import { PostCommentsSection } from './PostComments.style';
import { PostCommentHeader, PostComment } from './';
import { Comment } from '@/types/Comment';
import { Like } from '@/types/Like';

interface PostCommentsProps {
  postId: string;
  token: string;
  currentUserId: string;
  comments: Comment[];
  refetch: () => void;
  myLike: Like;
  likeCounts: number;
  userId?: string;
}

const PostComments = ({
  postId,
  token,
  currentUserId,
  refetch,
  comments,
  myLike,
  likeCounts,
  userId
}: PostCommentsProps) => {
  return (
    <PostCommentsSection>
      <PostCommentHeader
        userId={userId}
        postId={postId}
        token={token}
        refetch={refetch}
        myLike={myLike}
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
