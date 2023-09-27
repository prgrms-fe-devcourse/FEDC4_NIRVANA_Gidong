import {
  SkeletonContainer,
  SkeletonAvatarContainer,
  SkeletonAvatar,
  SkeletonUserInfoContainer,
  SkeletonUserInfo
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
