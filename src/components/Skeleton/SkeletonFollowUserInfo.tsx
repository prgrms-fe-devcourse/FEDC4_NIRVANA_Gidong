import {
  SkeletonContainer,
  SkeletonAvatarContainer,
  SkeletonAvatar,
  SkeletonUserInfoContainer,
  SkeletonUserInfo
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
