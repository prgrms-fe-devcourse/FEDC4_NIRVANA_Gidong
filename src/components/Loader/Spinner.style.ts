import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  opacity: ${({ isLoading }: { isLoading: boolean }) => (isLoading ? 1 : 0)};
`;

export default Spinner;
