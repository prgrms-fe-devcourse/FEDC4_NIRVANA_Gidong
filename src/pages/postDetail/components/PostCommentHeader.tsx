import { Icon } from '@components/Icon';
import { useMutation } from '@tanstack/react-query';
import { postLike, deleteLike } from '@apis/Like';
import {
  PostCommentHeaderContainer,
  PostCommentHeaderText,
  PostLikeContainer
} from './PostCommentHeader.style';
import { Like } from '@/types/Like';

interface PostCommentHeaderProps {
  postId: string;
  token: string;
  likeCounts: number;
  refetch: () => void;
  myLike: Like;
  postCommentCount: number;
}

const PostCommentHeader = ({
  postId,
  token,
  refetch,
  myLike,
  likeCounts,
  postCommentCount = 0
}: PostCommentHeaderProps) => {
  const { mutate, isSuccess } = useMutation(() => {
    return myLike ? deleteLike(myLike._id, token) : postLike(postId, token);
  });

  if (isSuccess) {
    refetch();
  }
  const handleLikeClick = () => {
    mutate();
  };

  console.log(myLike);
  return (
    <PostCommentHeaderContainer>
      <PostLikeContainer onClick={handleLikeClick}>
        <Icon
          name='favorite'
          color='purpleVivid'
          fill={myLike ? true : false}
        />
      </PostLikeContainer>
      <PostCommentHeaderText>{likeCounts}</PostCommentHeaderText>
      <PostCommentHeaderText>댓글 {postCommentCount}개</PostCommentHeaderText>
    </PostCommentHeaderContainer>
  );
};

export default PostCommentHeader;
