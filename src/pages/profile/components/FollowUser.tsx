import { useNavigate } from 'react-router-dom';

import { FollowUserContainer } from './FollowUser.style';
import { FollowButton, FollowUserInfo } from '@pages/profile/components';
import { User } from '@/types';

interface FollowUserProps {
  followedThisUser: boolean;
  followUser: User;
  followerTab?: boolean;
  followDataId: string;
  myProfile: boolean;
}

const FollowUser = ({
  followDataId,
  followUser,
  followerTab,
  followedThisUser,
  myProfile
}: FollowUserProps) => {
  const { _id, fullName, image, isOnline, email } = followUser;

  const navigate = useNavigate();

  const handleClickUser = () => navigate(`/profile/${_id}`);

  return (
    <FollowUserContainer>
      <FollowUserInfo
        fullName={fullName}
        image={image}
        isOnline={isOnline}
        email={email}
        handleClickUser={handleClickUser}
      />
      {myProfile && (
        <FollowButton
          followingDataId={followDataId}
          followingUserId={_id}
          followerTab={followerTab}
          followedThisUser={followedThisUser}
        />
      )}
    </FollowUserContainer>
  );
};
export default FollowUser;
