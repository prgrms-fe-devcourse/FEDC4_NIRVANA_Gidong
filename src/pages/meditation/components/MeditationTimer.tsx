import styled from '@emotion/styled';
import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import formatTime from '@utils/formatTime';

const TimerContainer = styled.div`
  display: flex;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: ${({ theme }) => theme['linearGradientPurpleVivid']};
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const TimerElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #211730;
  color: ${({ theme }) => theme['white']};
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;

export const meditationTime = atom({
  key: 'meditationTime',
  default: 0
});

const MeditationTimer = () => {
  const [time, setTime] = useRecoilState(meditationTime);

  const startTimer = () => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          document.dispatchEvent(new Event('END-MEDITATION'));
          return prevTime;
        }
      });
    }, 1000);
    document.dispatchEvent(new Event('START-MEDITATION'));
  };

  return (
    <TimerContainer>
      <TimerElement onClick={startTimer}>{formatTime(time)}</TimerElement>
    </TimerContainer>
  );
};

export default MeditationTimer;
