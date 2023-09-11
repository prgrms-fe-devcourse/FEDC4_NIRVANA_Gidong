import styled from '@emotion/styled';
import { useState } from 'react';

const TimerContainer = styled.div`
  display: flex;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.linearGradientPurpleVivid};
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
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: bold;
`;

const MeditationTimer = () => {
  const [time, setTime] = useState('START');
  return (
    <TimerContainer>
      <TimerElement>{time}</TimerElement>
    </TimerContainer>
  );
};

export default MeditationTimer;
