import { FollowUserLayout } from './FollowUser.style';
import { UserId, UserName } from '@components/UserText';
import { BadgeAvatar } from '@components/Avatar';

interface UserData {
  _id: string;
  image: string;
  fullName: string;
  isOnline: boolean;
  email: string;
}

interface FollowUserProps {
  userData: UserData;
}

const FollowUser = ({ userData }: FollowUserProps) => {
  const { fullName, email, isOnline, image } = userData;

  return (
    <FollowUserLayout>
      <BadgeAvatar
        alt={fullName}
        src={image}
        size={39}
        online={isOnline}
      />
      <UserId email={email} />
      <UserName>{fullName}</UserName>
    </FollowUserLayout>
  );
};

export default FollowUser;
