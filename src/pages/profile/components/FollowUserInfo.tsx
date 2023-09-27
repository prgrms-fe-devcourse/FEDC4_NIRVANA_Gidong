import { FollowUserInfoContainer } from './FollowUserInfo.style';
import { UserId, UserName } from '@components/UserText';
import { BadgeAvatar } from '@components/Avatar';
import { useNavigate } from 'react-router-dom';

interface FollowUserInfoProps {
  fullName: string;
  image?: string;
  email: string;
  isOnline: boolean;
  id: string;
  avatarSize?: number;
}

const FollowUserInfo = ({
  fullName,
  isOnline,
  email,
  image,
  id,
  avatarSize = 40
}: FollowUserInfoProps) => {
  const navigate = useNavigate();

  const handleClickInfo = () => navigate(`/profile/${id}`);

  return (
    <FollowUserInfoContainer onClick={handleClickInfo}>
      <BadgeAvatar
        alt={fullName}
        src={image}
        size={avatarSize}
        online={isOnline}
      />
      <UserName>{fullName}</UserName>
      <UserId email={email} />
    </FollowUserInfoContainer>
  );
};

export default FollowUserInfo;
