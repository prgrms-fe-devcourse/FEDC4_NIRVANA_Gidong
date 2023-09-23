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
    width: 60px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

export { StyledSkeleton };
