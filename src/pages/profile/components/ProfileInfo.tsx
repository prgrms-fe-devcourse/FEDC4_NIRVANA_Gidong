import { Avatar } from '@components/Avatar';
import { UserId, UserName } from '@components/UserText';
import { useRecoilValue } from 'recoil';
import { editModeState } from '../states/editMode';
import { ProfileAvatarEdit } from '@pages/profile/components';
import {
  ProfileAvatarContainer,
  ProfileInfoContainer,
  ProfileInfoNameAndBadge
} from './ProfileInfo.style';

interface ProfileInfoProps {
  fullName: string;
  email: string;
  avatarImgSrc: string;
  refetch: () => void;
}

const ProfileInfo = ({
  email,
  fullName,
  avatarImgSrc,
  refetch
}: ProfileInfoProps) => {
  const editMode = useRecoilValue(editModeState);

  return (
    <ProfileInfoContainer>
      <ProfileAvatarContainer>
        <Avatar
          size={70}
          src={avatarImgSrc}
          alt={fullName}>
          {editMode && (
            <ProfileAvatarEdit refetch={refetch}></ProfileAvatarEdit>
          )}
        </Avatar>
      </ProfileAvatarContainer>
      <ProfileInfoNameAndBadge>
        <UserName>{fullName}</UserName>
      </ProfileInfoNameAndBadge>

      <UserId email={email} />
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
