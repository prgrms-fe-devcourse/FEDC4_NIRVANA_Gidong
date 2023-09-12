import {
  ProfileCoverImage,
  ProfileCoverImageContainer
} from './ProfileCover.style';

interface ProfileBackgroundProps {
  src: string;
}

const ProfileCover = ({ src }: ProfileBackgroundProps) => {
  return (
    <ProfileCoverImageContainer src={src}>
      <ProfileCoverImage
        src={src}
        alt='coverImage'></ProfileCoverImage>
    </ProfileCoverImageContainer>
  );
};

export default ProfileCover;
