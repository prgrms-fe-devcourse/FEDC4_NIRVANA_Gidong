import { Avatar } from '@/components/Avatar';
import { StackBadge } from '@/components/Badge';
import { UserId, UserName } from '@/components/UserText';
import { useRecoilValue } from 'recoil';
import { editModeState } from '../../states/editMode';
import ProfileAvatarEdit from './ProfileAvatarEdit';
import {
  ProfileInfoContainer,
  ProfileInfoNameAndBadge,
  ProfileAvatarContainer
} from './ProfileInfo.style';

interface ProfileInfoProps {
  fullName: string;
  email: string;
  avatarImgSrc: string;
  meditationStack: number;
  refetch: () => void;
}

const ProfileInfo = ({
  email,
  fullName,
  avatarImgSrc,
  meditationStack,
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
        <StackBadge stack={meditationStack} />
      </ProfileInfoNameAndBadge>

      <UserId email={email} />
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
