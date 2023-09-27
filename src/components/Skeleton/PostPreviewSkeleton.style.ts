import styled from '@emotion/styled';
import { StyledSkeleton } from './Skeleton.style';

const SkeletonContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  height: 150px;
  margin: 0 auto;
  padding: 15px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.white800};
`;

const SkeletonHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const SkeletonAvatar = styled(StyledSkeleton)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SkeletonUser = styled(StyledSkeleton)`
  width: calc(100% - 70px);
  margin-left: 20px;
  height: 40px;
  padding-left: 10px;
  border-radius: 10px;
`;

const SkeletonContentContainer = styled.div`
  width: 100%;
`;

const SkeletonContent = styled(StyledSkeleton)`
  margin-top: 10px;
  width: 80%;
  height: 20px;
  padding: 5px 10px;
  border-radius: 10px;
`;

export {
  SkeletonContainer,
  SkeletonHeader,
  SkeletonAvatar,
  SkeletonUser,
  SkeletonContentContainer,
  SkeletonContent
};
