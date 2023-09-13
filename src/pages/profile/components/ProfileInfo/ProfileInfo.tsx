import { Avatar } from '@/components/Avatar';
import { StackBadge } from '@/components/Badge';
import { UserId, UserName } from '@/components/UserText';
import { useRecoilValue } from 'recoil';
import { editModeState } from '../../states/editMode';
import {
  ProfileInfoContainer,
  ProfileInfoNameAndBadge,
  ProfileAvatarContainer,
  EditIconContainer
} from './ProfileInfo.style';
import { Icon } from '@components/Icon';

interface ProfileInfoProps {
  fullName: string;
  email: string;
  avatarImgSrc: string;
  meditationStack: number;
}

const ProfileInfo = ({
  email,
  fullName,
  avatarImgSrc,
  meditationStack
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
            <>
              <EditIconContainer onClick={() => console.log('change Avatar')}>
                <Icon
                  name='edit_square'
                  size={30}
                  color='white'
                />
              </EditIconContainer>
            </>
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
