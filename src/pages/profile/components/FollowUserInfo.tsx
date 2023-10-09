import {
  FollowUserInfoContainer,
  FollowAvatarContainer
} from './FollowUserInfo.style';
import { UserId, UserName } from '@components/UserText';
import { BadgeAvatar } from '@components/Avatar';

interface FollowUserInfoProps {
  fullName: string;
  image?: string;
  email: string;
  isOnline: boolean;
  avatarSize?: number;
  handleClickUser: () => void;
}

const FollowUserInfo = ({
  fullName,
  isOnline,
  email,
  image,
  avatarSize = 40,
  handleClickUser
}: FollowUserInfoProps) => {
  return (
    <FollowUserInfoContainer onClick={handleClickUser}>
      <FollowAvatarContainer>
        <BadgeAvatar
          alt={fullName}
          src={image}
          size={avatarSize}
          online={isOnline}
        />
      </FollowAvatarContainer>
      <UserName>{fullName}</UserName>
      <UserId email={email} />
    </FollowUserInfoContainer>
  );
};

export default FollowUserInfo;
