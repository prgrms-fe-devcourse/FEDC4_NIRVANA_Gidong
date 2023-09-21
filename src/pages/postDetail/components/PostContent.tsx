import { Icon } from '@components/Icon';
import {
  PostContentSection,
  PostContentHeader,
  PostContentAvatarContainer,
  PostContentBody,
  PostContentMenuIconContainer,
  PostContentTime,
  PostContentUserInfo,
  PostContentUserName,
  PostContentMenu
} from './PostContent.style';
import { User } from '@/types/User';
import { Avatar } from '@components/Avatar';
import { UserId, UserName } from '@components/UserText';
import { useState } from 'react';

interface PostContentProps {
  author: User;
  createdAt: string;
  title: string;
}

const PostContent = ({ author, createdAt, title }: PostContentProps) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuClick = () => {
    setMenuOpened(!menuOpened);
  };

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
        <PostContentMenuIconContainer
          opened={menuOpened}
          onClick={handleMenuClick}>
          <Icon
            size={24}
            name='menu'
          />
        </PostContentMenuIconContainer>
        <PostContentMenu opened={menuOpened}>
          <p>삭제하기</p>
          <p>수정하기</p>
        </PostContentMenu>
      </PostContentHeader>
      <PostContentBody>{title}</PostContentBody>
    </PostContentSection>
  );
};

export default PostContent;
