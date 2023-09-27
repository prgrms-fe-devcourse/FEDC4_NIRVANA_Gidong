import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const TimerContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  height: 180px;
  width: 100%;
  background: transparent;
  margin-top: 100px;
`;

export const TimerElementBorder = styled.div<{ timerPaused: boolean }>`
  position: absolute;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: ${({ theme, timerPaused }) =>
    timerPaused
      ? theme.color.linearGradientGreyVivid
      : theme.color.linearGradientPurpleVivid};
  ${({ timerPaused }) =>
    !timerPaused &&
    css`
      animation: ${rotate} 2s linear infinite;
    `}
  z-index: 1;
`;

export const TimerElement = styled.button<{ timerPaused: boolean }>`
  position: absolute;
  border: none;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #211730;
  color: ${({ theme, timerPaused }) =>
    timerPaused ? theme.color.greyLight : theme.color.white};
  font-size: 24px;
  font-weight: bold;

  &:hover,
  &:active {
    filter: brightness(50%);
    transition: 0.3s;
  }

  z-index: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
