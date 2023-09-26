import { FollowUserContainer } from './FollowUser.style';
import { FollowUserInfo, FollowButton } from '@pages/profile/components';
import { User } from '@/types';

interface FollowUserProps {
  FollowedThisUser: boolean;
  followUser: User;
  possibleDeleteFollow: boolean;
  followDataId: string;
}

const FollowUser = ({
  followDataId,
  followUser,
  possibleDeleteFollow,
  FollowedThisUser
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
          possibleDeleteFollow={possibleDeleteFollow}
          FollowedThisUser={FollowedThisUser}
        />
      }
    </FollowUserContainer>
  );
};
export default FollowUser;
