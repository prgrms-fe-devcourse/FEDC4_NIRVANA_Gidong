import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const SkeletonContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  height: 150px;
  margin: 0 auto;
  padding: 15px 60px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.grey800};
`;

const SkeletonHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const SkeletonAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  isolation: isolate;
  background-color: ${({ theme }) => theme.color.grey800};
  position: relative;
  overflow: hidden;
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
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

const SkeletonUser = styled.div`
  width: calc(100% - 70px);
  margin-left: 20px;
  height: 40px;
  isolation: isolate;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.color.grey800};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
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
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

const SkeletonContentContainer = styled.div`
  width: 100%;
`;

const SkeletonContent = styled.div`
  margin-top: 10px;
  width: 80%;
  height: 20px;
  isolation: isolate;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.color.grey800};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
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
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

export {
  SkeletonContainer,
  SkeletonHeader,
  SkeletonAvatar,
  SkeletonUser,
  SkeletonContentContainer,
  SkeletonContent
};
