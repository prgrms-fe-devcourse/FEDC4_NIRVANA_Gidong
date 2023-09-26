import type { EditedPost } from '@/types';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';
import {
  AvatarContainer,
  PostInfoContainer,
  PostDetailInfoContainer,
  UserNameContainer
} from './PostPreview.style';
import { Link } from '@components/Link';

interface PostHeaderProps {
  post: Pick<
    EditedPost,
    '_id' | 'image' | 'author' | 'createdAt' | 'meditationTime'
  >;
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
  const { author, createdAt, meditationTime, _id } = post;
  const iconDescription = [
    { name: 'favorite', size: 12, total: totalLikes },
    { name: 'chat', size: 12, total: totalComments }
  ];

  return (
    <>
      {!noneProfile && (
        <AvatarContainer>
          <Link
            pageLink={`/profile/${author._id}`}
            color='black'>
            <Avatar
              alt={author.fullName}
              src={author.image}
              size={45}
            />
          </Link>
        </AvatarContainer>
      )}
      <PostInfoContainer>
        <Link
          pageLink={`/posts/${_id}`}
          color='black'>
          {!noneProfile && (
            <UserNameContainer>{author.fullName}</UserNameContainer>
          )}
          <PostDetailInfoContainer>
            {createdAt} / {meditationTime}분
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
        </Link>
      </PostInfoContainer>
    </>
  );
};

export default PostHeader;
