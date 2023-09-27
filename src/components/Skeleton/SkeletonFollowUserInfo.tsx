import {
  SkeletonAvatar,
  SkeletonAvatarContainer,
  SkeletonContainer,
  SkeletonUserInfo,
  SkeletonUserInfoContainer
} from './SkeletonFollowUserInfo.style';

const SkeletonFollowUserInfo = () => {
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

export default SkeletonFollowUserInfo;
