import { Avatar } from '@components/Avatar';
import {
  PostCommentContainer,
  PostCommentAvatarContainer,
  PostCommentUserContainer,
  PostCommentContentContainer
} from './PostComment.style';
import { UserId, UserName } from '@components/UserText';

interface PostCommentProps {
  userId: string;
  text: string;
}

const PostComment = ({ text }: PostCommentProps) => {
  return (
    <PostCommentContainer>
      <PostCommentAvatarContainer>
        <Avatar
          size={39}
          src='https://avatars.githubusercontent.com/u/26498437?v=4'
          alt='testMan'
        />
      </PostCommentAvatarContainer>
      <PostCommentContentContainer>
        <PostCommentUserContainer>
          <UserName>testMan</UserName>
          <UserId email='testman@naver.com' />
        </PostCommentUserContainer>
        {text}
      </PostCommentContentContainer>
    </PostCommentContainer>
  );
};

export default PostComment;
