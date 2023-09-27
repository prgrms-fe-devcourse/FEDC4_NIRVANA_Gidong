import styled from '@emotion/styled';

const StyledSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background-color: ${({ theme }) => theme.color.white800};

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100vw);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
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

const SkeletonContent = styled(StyledSkeleton)`
  margin-top: 10px;
  width: 80%;
  height: 20px;
  padding: 5px 10px;
  border-radius: 10px;
`;

const SkeletonLongRectangle = styled(StyledSkeleton)`
  width: 100%;
  height: 80px;
`;

export {
  StyledSkeleton,
  SkeletonHeader,
  SkeletonAvatar,
  SkeletonUser,
  SkeletonContent,
  SkeletonLongRectangle
};
