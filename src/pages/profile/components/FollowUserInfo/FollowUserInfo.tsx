import { FollowUserInfoContainer } from './FollowUserInfo.style';
import { UserId, UserName } from '@components/UserText';
import { BadgeAvatar } from '@components/Avatar';
import { User } from '@types/User';

interface FollowUserInfoProps {
  userData: User;
}

const FollowUserInfo = ({ userData }: FollowUserInfoProps) => {
  const { fullName, isOnline, email } = userData;
  return (
    <FollowUserInfoContainer>
      <BadgeAvatar
        alt={fullName}
        src={'https://picsum.photos/200/300'}
        size={39}
        online={isOnline}
      />
      <UserId email={email} />
      <UserName>{fullName}</UserName>
    </FollowUserInfoContainer>
  );
};

export default FollowUserInfo;
