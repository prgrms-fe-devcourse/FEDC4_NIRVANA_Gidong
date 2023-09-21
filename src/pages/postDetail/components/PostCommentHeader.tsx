import { Icon } from '@components/Icon';
import { useMutation } from '@tanstack/react-query';
import { postLike, deleteLike } from '@apis/Like';
import {
  PostCommentHeaderContainer,
  PostCommentHeaderText,
  PostLikeContainer
} from './PostCommentHeader.style';

interface PostCommentHeaderProps {
  postId: string;
  token: string;
  likeCounts: number;
  likedThisPost: boolean;
  refetch: () => void;
  postCommentCount: number;
}

const PostCommentHeader = ({
  postId,
  token,
  refetch,
  likedThisPost,
  likeCounts,
  postCommentCount = 0
}: PostCommentHeaderProps) => {
  const { mutate, isSuccess } = useMutation(() => {
    return likedThisPost ? deleteLike(postId, token) : postLike(postId, token);
  });

  if (isSuccess) {
    refetch();
  }
  const handleLikeClick = () => {
    mutate();
  };

  return (
    <PostCommentHeaderContainer>
      <PostLikeContainer onClick={handleLikeClick}>
        <Icon
          name='favorite'
          color='purpleVivid'
          fill={likedThisPost}
        />
      </PostLikeContainer>
      <PostCommentHeaderText>{likeCounts}</PostCommentHeaderText>
      <PostCommentHeaderText>댓글 {postCommentCount}개</PostCommentHeaderText>
    </PostCommentHeaderContainer>
  );
};

export default PostCommentHeader;
