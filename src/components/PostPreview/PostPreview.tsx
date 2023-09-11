import type Post from '@types/Post';
import { Avatar } from '../Avatar';
import Icon from '../Icon';
import {
  PreviewWrapper,
  PostHeaderWrapper,
  PostInfoWrapper,
  PostContent,
  UserNameWrapper,
  AvatarWrapper,
  PostDetailInfoWrapper
} from './PostPreview.style';

interface PostPreviewProps {
  post: Post;
  noneProfile: boolean;
}

const PostPreview = ({ post, noneProfile = false }: PostPreviewProps) => {
  const { image, likes, comments, title, author, createdAt } = post;
  const totalLikes = likes.length;
  const totalComments = comments.length;
  const iconDescription = [
    { name: 'favorite', size: 12, total: totalLikes },
    { name: 'chat', size: 12, total: totalComments }
  ];
  const previewTitle = title.substring(0, 100);
  // todo: 명상 시간 데이터는 아직 못받아왔으므로 추후에 제외시켜놓은 거 추가하기

  const PostDetailInfo = () => {
    return (
      <PostDetailInfoWrapper>
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
      </PostDetailInfoWrapper>
    );
  };
  const PostHeaderWithUser = () => {
    return (
      <>
        <AvatarWrapper>
          <Avatar
            alt={'유저 프로필'}
            src={image}
            size={25}
          />
        </AvatarWrapper>
        <PostInfoWrapper>
          <UserNameWrapper>{author}</UserNameWrapper>
          <PostDetailInfo />
        </PostInfoWrapper>
      </>
    );
  };

  const PostHeader = noneProfile === true ? PostHeaderWithUser : PostDetailInfo;
  return (
    <PreviewWrapper>
      <PostHeaderWrapper>
        <PostHeader />
      </PostHeaderWrapper>
      <PostContent>{previewTitle}...</PostContent>
    </PreviewWrapper>
  );
};
export default PostPreview;
