import { Avatar } from '@components/Avatar';
import {
  PostCommentContainer,
  PostCommentAvatarContainer,
  PostCommentUserContainer,
  PostCommentContentContainer
} from './PostComment.style';
import { UserId, UserName } from '@components/UserText';

const PostComment = () => {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        suscipit amet modi fugit debitis facere quod expedita atque et deleniti,
        dolores pariatur aliquam quisquam maxime cupiditate beatae qui! Ab, aut.
      </PostCommentContentContainer>
    </PostCommentContainer>
  );
};

export default PostComment;
