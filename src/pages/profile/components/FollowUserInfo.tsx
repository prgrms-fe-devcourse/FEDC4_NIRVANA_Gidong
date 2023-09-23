import { FollowUserInfoContainer } from './FollowUserInfo.style';
import { UserId, UserName } from '@components/UserText';
import { BadgeAvatar } from '@components/Avatar';

interface FollowUserInfoProps {
  fullName: string;
  image?: string;
  email: string;
  isOnline: boolean;
}

const FollowUserInfo = ({
  fullName,
  isOnline,
  email,
  image
}: FollowUserInfoProps) => {
  return (
    <FollowUserInfoContainer>
      <BadgeAvatar
        alt={fullName}
        src={image}
        size={39}
        online={isOnline}
      />
      <UserName>{fullName}</UserName>
      <UserId email={email} />
    </FollowUserInfoContainer>
  );
};

export default FollowUserInfo;
