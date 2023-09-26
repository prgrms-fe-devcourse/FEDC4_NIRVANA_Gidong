import styled from '@emotion/styled';
import { StyledSkeleton } from './Skeleton.style';

const SkeletonContainer = styled.div`
  width: 100%;
  height: 80px;
  ${({ theme }) => theme.style.flexAlignCenter};
`;

const SkeletonAvatarContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
`;

const SkeletonAvatar = styled(StyledSkeleton)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SkeletonUserInfoContainer = styled.div`
  height: 100%;
  ${({ theme }) => theme.style.flexAlignCenter};
`;

const SkeletonUserInfo = styled(StyledSkeleton)`
  width: 200px;
  height: 20px;
  margin-left: 10px;
  border-radius: 10px;
`;

export {
  SkeletonContainer,
  SkeletonAvatarContainer,
  SkeletonAvatar,
  SkeletonUserInfoContainer,
  SkeletonUserInfo
};
