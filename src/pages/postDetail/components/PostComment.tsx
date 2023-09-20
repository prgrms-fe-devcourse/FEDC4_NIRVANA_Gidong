import { Avatar } from '@components/Avatar';
import {
  PostCommentContainer,
  PostCommentAvatarContainer,
  PostCommentUserContainer,
  PostCommentContentContainer
} from './PostComment.style';
import { UserId, UserName } from '@components/UserText';
import { User } from '@/types/User';

interface PostCommentProps {
  author: User;
  text: string;
}

const PostComment = ({ author, text }: PostCommentProps) => {
  return (
    <PostCommentContainer>
      <PostCommentAvatarContainer>
        <Avatar
          size={39}
          src={author.image ? author.image : ''}
          alt={author.fullName}
        />
      </PostCommentAvatarContainer>
      <PostCommentContentContainer>
        <PostCommentUserContainer>
          <UserName>{author.fullName}</UserName>
          <UserId email={author.email} />
        </PostCommentUserContainer>
        {text}
      </PostCommentContentContainer>
    </PostCommentContainer>
  );
};

export default PostComment;
