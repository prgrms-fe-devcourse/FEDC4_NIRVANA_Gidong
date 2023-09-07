import { Avatar } from '@/components/Avatar';
import { StackBadge } from '@/components/Badge/StackBadge';
import {
  ProfileInfoContainer,
  ProfileInfoNameAndBadge,
  ProfileAvatarContainer,
  ProfileEmailContainer
} from './styles';

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
  console.log(email);
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
        <span>혜성상회</span>
        <StackBadge stack={meditationStack} />
      </ProfileInfoNameAndBadge>

      <ProfileEmailContainer>
        <span>@star_comet</span>
      </ProfileEmailContainer>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
