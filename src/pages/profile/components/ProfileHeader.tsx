import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import {
  ProfileHeaderButtonContainer,
  ProfileHeaderSection
} from './ProfileHeader.style';
import FollowButton from './FollowButton';
import { Follow } from '@/types/Follow';

interface ProfileHeaderProps {
  myProfile: boolean;
  profileId: string;
  myFollowData: Follow;
  openSidebar: () => void;
  refetch: () => void;
}

const ProfileHeader = ({
  myProfile,
  myFollowData,
  profileId,
  openSidebar,
  refetch
}: ProfileHeaderProps) => {
  const handleEditClick = () => {
    openSidebar();
  };
  return (
    <ProfileHeaderSection>
      <ProfileHeaderButtonContainer>
        {myProfile ? (
          <Button
            width={40}
            height={40}
            bold={true}
            borderRadius={30}
            handleClick={handleEditClick}>
            <Icon
              name='settings'
              size={20}
              color='greyLight'
            />
          </Button>
        ) : (
          myFollowData !== null && (
            <FollowButton
              followingDataId={myFollowData?._id}
              followingUserId={profileId}
              fontSize={12}
              possibleDeleteFollow
              refetch={refetch}
            />
          )
        )}
      </ProfileHeaderButtonContainer>
    </ProfileHeaderSection>
  );
};

export default ProfileHeader;
