import { FollowUserContainer } from './FollowUser.style';
import { FollowButton, FollowUserInfo } from '@pages/profile/components';
import { User } from '@/types';

interface FollowUserProps {
  followedThisUser: boolean;
  followUser: User;
  followerTab?: boolean;
  followDataId: string;
}

const FollowUser = ({
  followDataId,
  followUser,
  followerTab,
  followedThisUser
}: FollowUserProps) => {
  const { _id, fullName, image, isOnline, email } = followUser;

  return (
    <FollowUserContainer>
      <FollowUserInfo
        fullName={fullName}
        image={image}
        isOnline={isOnline}
        email={email}
        id={_id}
      />
      {
        <FollowButton
          followingDataId={followDataId}
          followingUserId={_id}
          followerTab={followerTab}
          followedThisUser={followedThisUser}
        />
      }
    </FollowUserContainer>
  );
};
export default FollowUser;
