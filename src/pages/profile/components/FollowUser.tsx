import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo, FollowButton } from '@pages/profile/components';
import { User } from '@/types';

interface FollowUserProps {
  following: boolean;
  followUser: User;
  followDataId: string;
}

const FollowUser = ({
  followDataId,
  followUser,
  following
}: FollowUserProps) => {
  const { fullName, image, isOnline, email } = followUser;

  return (
    <FollowUserContainer>
      <FollowUserInfo
        fullName={fullName}
        image={image}
        isOnline={isOnline}
        email={email}
      />
      {following && <FollowButton followDataId={followDataId} />}
    </FollowUserContainer>
  );
};
export default FollowUser;
