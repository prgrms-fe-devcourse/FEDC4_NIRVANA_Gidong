import { Icon } from '@components/Icon';
import {
  PostContentSection,
  PostContentHeader,
  PostContentAvatarContainer,
  PostContentBody,
  PostContentMenu,
  PostContentTime,
  PostContentUserInfo,
  PostContentUserName
} from './PostContent.style';
import { User } from '@/types/User';
import { Avatar } from '@components/Avatar';
import { UserId, UserName } from '@components/UserText';

interface PostContentProps {
  author: User;
  createdAt: string;
  title: string;
}

const PostContent = ({ author, createdAt, title }: PostContentProps) => {
  return (
    <PostContentSection>
      <PostContentHeader>
        <PostContentAvatarContainer>
          <Avatar
            src={author?.image}
            alt={author?.fullName}
            size={39}
          />
        </PostContentAvatarContainer>
        <PostContentUserInfo>
          <PostContentUserName>
            <UserName>{author?.fullName}</UserName>
            <UserId email={author ? author.email : ''} />
          </PostContentUserName>
          <PostContentTime>{createdAt}</PostContentTime>
        </PostContentUserInfo>
        <PostContentMenu>
          <Icon
            size={24}
            name='menu'
          />
        </PostContentMenu>
      </PostContentHeader>
      <PostContentBody>{title}</PostContentBody>
    </PostContentSection>
  );
};

export default PostContent;
