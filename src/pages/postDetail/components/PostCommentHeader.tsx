import { Icon } from '@components/Icon';
import {
  PostCommentHeaderContainer,
  PostCommentHeaderText
} from './PostCommentHeader.style';

interface PostCommentHeaderProps {
  postLikeCount: number;
  postCommentCount: number;
}

const PostCommentHeader = ({
  postLikeCount = 0,
  postCommentCount = 0
}: PostCommentHeaderProps) => {
  return (
    <PostCommentHeaderContainer>
      <Icon
        name='favorite'
        color='purpleVivid'
        fill={true}
      />
      <PostCommentHeaderText>{postLikeCount}</PostCommentHeaderText>
      <PostCommentHeaderText>댓글 {postCommentCount}개</PostCommentHeaderText>
    </PostCommentHeaderContainer>
  );
};

export default PostCommentHeader;
