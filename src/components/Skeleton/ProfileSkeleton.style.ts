import styled from '@emotion/styled';
import { SkeletonAvatar, StyledSkeleton } from './Skeleton.style';

export const ProfileSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;

export const ProfileSkeletonHeader = styled.div`
  width: 100%;
  padding: 0 26px;
  padding-top: 65px;
`;

export const ProfileSkeletonContent = styled.div`
  width: 100%;
  flex: 1;
  padding: 26px;
`;

export const ProfileSkeletonAvatar = styled(SkeletonAvatar)`
  width: 70px;
  height: 70px;
`;

export const ProfileSkeletonUserName = styled(StyledSkeleton)`
  width: 100px;
  height: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const ProfileSkeletonUserEmail = styled(StyledSkeleton)`
  width: 80px;
  height: 20px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const ProfileSkeletonTab = styled(StyledSkeleton)`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const ProfileSkeletonCarousel = styled(StyledSkeleton)`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;
