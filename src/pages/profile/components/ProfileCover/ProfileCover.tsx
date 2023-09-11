import {
  ProfileCoverImage,
  ProfileCoverImageContainer
} from './ProfileCover.style';

interface ProfileBackgroundProps {
  src: string;
  children?: React.ReactNode;
}

const ProfileCover = ({ src, children }: ProfileBackgroundProps) => {
  return (
    <ProfileCoverImageContainer src={src}>
      <ProfileCoverImage
        src={src}
        alt='coverImage'>
        {children}
      </ProfileCoverImage>
    </ProfileCoverImageContainer>
  );
};

export default ProfileCover;
