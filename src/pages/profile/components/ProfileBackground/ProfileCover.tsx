import { ProfileCoverImage } from './ProfileCover.style';

interface ProfileBackgroundProps {
  src: string;
  children?: React.ReactNode;
}

const ProfileCover = ({ src, children }: ProfileBackgroundProps) => {
  return <ProfileCoverImage src={src}>{children}</ProfileCoverImage>;
};

export default ProfileCover;
