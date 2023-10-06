import {
  ProfileSkeletonContainer,
  ProfileSkeletonHeader,
  ProfileSkeletonAvatar,
  ProfileSkeletonUserName,
  ProfileSkeletonUserEmail,
  ProfileSkeletonTab,
  ProfileSkeletonCarousel,
  ProfileSkeletonContent
} from './ProfileSkeleton.style';

const ProfileSkeleton = () => {
  return (
    <ProfileSkeletonContainer>
      <ProfileSkeletonHeader>
        <ProfileSkeletonAvatar />
        <ProfileSkeletonUserName />
        <ProfileSkeletonUserEmail />
        <ProfileSkeletonTab />
      </ProfileSkeletonHeader>
      <ProfileSkeletonContent>
        <ProfileSkeletonCarousel />
      </ProfileSkeletonContent>
    </ProfileSkeletonContainer>
  );
};

export default ProfileSkeleton;
