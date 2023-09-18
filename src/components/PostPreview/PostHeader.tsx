import type { Post } from '@/types';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';
import {
  AvatarContainer,
  PostInfoContainer,
  PostDetailInfoContainer,
  UserNameContainer
} from './PostPreview.style';

interface PostHeaderProps {
  post: Pick<Post, 'image' | 'title' | 'author' | 'createdAt'>;
  totalLikes: number;
  totalComments: number;
  noneProfile: boolean;
}

const PostHeader = ({
  post,
  totalLikes,
  totalComments,
  noneProfile
}: PostHeaderProps) => {
  const { image, author, createdAt } = post;
  const iconDescription = [
    { name: 'favorite', size: 12, total: totalLikes },
    { name: 'chat', size: 12, total: totalComments }
  ];

  return (
    <>
      {!noneProfile && (
        <AvatarContainer>
          <Avatar
            alt={'유저 프로필'}
            src={image}
            size={35}
          />
        </AvatarContainer>
      )}
      <PostInfoContainer>
        {!noneProfile && (
          <UserNameContainer>{author.fullName}</UserNameContainer>
        )}
        <PostDetailInfoContainer>
          {createdAt}
          {iconDescription.map((iconInfo, index) => {
            return (
              <div key={index}>
                <Icon
                  name={iconInfo.name}
                  size={iconInfo.size}
                  color={'greyLight'}
                />
                {iconInfo.total}
              </div>
            );
          })}
        </PostDetailInfoContainer>
      </PostInfoContainer>
    </>
  );
};

export default PostHeader;
