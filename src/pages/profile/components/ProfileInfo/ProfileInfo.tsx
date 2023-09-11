import { Avatar } from '@/components/Avatar';
import { StackBadge } from '@/components/Badge';
import { UserId, UserName } from '@/components/UserText';
import {
  ProfileInfoContainer,
  ProfileInfoNameAndBadge,
  ProfileAvatarContainer,
  ProfileEmailContainer
} from './ProfileInfo.style';

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
  return (
    <ProfileInfoContainer>
      <ProfileAvatarContainer>
        <Avatar
          size={70}
          src={avatarImgSrc}
          alt={fullName}
        />
      </ProfileAvatarContainer>
      <ProfileInfoNameAndBadge>
        <UserName>{fullName}</UserName>
        <StackBadge stack={meditationStack} />
      </ProfileInfoNameAndBadge>

      <ProfileEmailContainer>
        <UserId email={email} />
      </ProfileEmailContainer>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
