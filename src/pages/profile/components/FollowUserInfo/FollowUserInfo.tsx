import { FollowUserInfoContainer } from './FollowUserInfo.style';
import { UserId, UserName } from '@components/UserText';
import { BadgeAvatar } from '@components/Avatar';
import { FollowUserData } from '../../types';

interface FollowUserInfoProps {
  userData: FollowUserData;
}

const FollowUserInfo = ({ userData }: FollowUserInfoProps) => {
  const { fullName, email, isOnline, image } = userData;

  return (
    <FollowUserInfoContainer>
      <BadgeAvatar
        alt={fullName}
        src={image}
        size={39}
        online={isOnline}
      />
      <UserId email={email} />
      <UserName>{fullName}</UserName>
    </FollowUserInfoContainer>
  );
};

export default FollowUserInfo;
