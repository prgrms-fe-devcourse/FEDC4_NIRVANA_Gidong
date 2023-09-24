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
}

const FollowUserInfo = ({
  fullName,
  isOnline,
  email,
  image,
  id
}: FollowUserInfoProps) => {
  const navigate = useNavigate();

  const handleClickInfo = () => navigate(`/profile/${id}`);

  return (
    <FollowUserInfoContainer onClick={handleClickInfo}>
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
