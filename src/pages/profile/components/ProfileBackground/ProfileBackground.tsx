import { ProfileBackgroundImg } from './ProfileBackground.style';

interface ProfileBackgroundProps {
  src: string;
  children?: React.ReactNode;
}

const ProfileBackground = ({ src, children }: ProfileBackgroundProps) => {
  return <ProfileBackgroundImg src={src}>{children}</ProfileBackgroundImg>;
};

export default ProfileBackground;
