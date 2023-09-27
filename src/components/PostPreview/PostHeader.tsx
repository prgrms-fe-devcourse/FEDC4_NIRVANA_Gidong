import type { EditedPost } from '@/types';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';
import {
  AvatarContainer,
  PostInfoContainer,
  PostDetailInfoContainer,
  UserContainer,
  NameContainer,
  IdContainer,
  PostInfoContainer
} from './PostPreview.style';
import { Link } from '@components/Link';
import { UserId } from '@components/UserText';

interface PostHeaderProps {
  post: Pick<EditedPost, '_id' | 'author' | 'createdAt' | 'meditationTime'>;
  totalLikes?: number;
  totalComments?: number;
  noneProfile: boolean;
  showCommentStatus: boolean;
}

const PostHeader = ({
  post,
  totalLikes,
  totalComments,
  noneProfile,
  showCommentStatus
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
          setActiveStyle={false}
          pageLink={`/posts/${_id}`}
          color='black'>
          {!noneProfile && (
            <UserContainer>
              <NameContainer>{author.fullName}</NameContainer>
              <IdContainer>
                <UserId email={author.email} />
              </IdContainer>
            </UserContainer>
          )}
          <PostDetailInfoContainer noneProfile={noneProfile}>
            {createdAt} / {meditationTime}분
            {showCommentStatus &&
              iconDescription.map((iconInfo, index) => {
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
