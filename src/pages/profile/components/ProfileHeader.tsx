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
            width={30}
            height={30}
            bold={true}
            fontSize={12}
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
              followedThisUser={myFollowData ? true : false}
              fontSize={12}
              refetch={refetch}
            />
          )
        )}
      </ProfileHeaderButtonContainer>
    </ProfileHeaderSection>
  );
};

export default ProfileHeader;
