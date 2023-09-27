import { useRecoilValue } from 'recoil';

import type { Follow } from '@/types/Follow';

import { Avatar } from '@components/Avatar';
import { UserId, UserName } from '@components/UserText';
import { ProfileAvatarEdit } from '@pages/profile/components';
import { editModeState } from '../states/editMode';
import {
  ProfileAvatarContainer,
  ProfileInfoContainer,
  ProfileInfoNameAndBadge
} from './ProfileInfo.style';
import ProfileHeader from './ProfileHeader';

interface ProfileInfoProps {
  fullName: string;
  email: string;
  avatarImgSrc: string;
  myProfile: boolean;
  profileId: string;
  myFollowData: Follow;
  openSidebar: () => void;
  refetch: () => void;
}

const ProfileInfo = ({
  email,
  fullName,
  avatarImgSrc,
  refetch,
  myProfile,
  profileId,
  myFollowData,
  openSidebar
}: ProfileInfoProps) => {
  const editMode = useRecoilValue(editModeState);

  return (
    <ProfileInfoContainer>
      <ProfileAvatarContainer>
        <Avatar
          size={80}
          src={avatarImgSrc}
          alt={fullName}>
          {editMode && (
            <ProfileAvatarEdit refetch={refetch}></ProfileAvatarEdit>
          )}
        </Avatar>
      </ProfileAvatarContainer>
      <ProfileInfoNameAndBadge>
        <UserName size={20}>{fullName}</UserName>
        <UserId
          size={16}
          email={email}
        />
        <ProfileHeader
          myProfile={myProfile}
          myFollowData={myFollowData}
          profileId={profileId}
          openSidebar={openSidebar}
          refetch={refetch}
        />
      </ProfileInfoNameAndBadge>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
