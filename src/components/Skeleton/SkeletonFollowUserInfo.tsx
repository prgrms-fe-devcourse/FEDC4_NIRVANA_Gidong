import {
  SkeletonAvatar,
  SkeletonAvatarContainer,
  SkeletonContainer,
  SkeletonUserInfo,
  SkeletonUserInfoContainer
} from './SkeletonFollowUserInfo.style';

const FollowUserInfoSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonAvatarContainer>
        <SkeletonAvatar />
      </SkeletonAvatarContainer>
      <SkeletonUserInfoContainer>
        <SkeletonUserInfo />
      </SkeletonUserInfoContainer>
    </SkeletonContainer>
  );
};

export default FollowUserInfoSkeleton;
