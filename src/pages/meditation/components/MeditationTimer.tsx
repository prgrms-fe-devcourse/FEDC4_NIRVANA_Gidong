import styled from '@emotion/styled';
import { atom, useRecoilState } from 'recoil';
import { useState } from 'react';
import formatTime from '@utils/formatTime';
import { Icon } from '@components/Icon';

const TimerContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.linearGradientPurpleVivid};
  margin-top: 100px;
`;

const TimerElement = styled.button`
  ${({ theme }) => theme.style.flexCenter};
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
  &:hover {
    filter: brightness(50%);
    transition: 0.3s;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const meditationTime = atom({
  key: 'meditationTime',
  default: 0
});

let timerId = 0;

const MeditationTimer = () => {
  const [time, setTime] = useRecoilState(meditationTime);
  const [paused, setPaused] = useState(true);
  const [hovered, setHovered] = useState(false);

  const startTimer = () => {
    if (time === 0) {
      return;
    }
    setPaused(false);

    timerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        clearInterval(timerId);
        document.dispatchEvent(new Event('END-MEDITATION'));
        return prevTime;
      });
    }, 1000);

    document.dispatchEvent(new Event('START-MEDITATION'));
  };

  const toggleTimer = () => {
    if (!paused) {
      clearInterval(timerId);
      setPaused(true);
    } else {
      startTimer();
    }
  };

  return (
    <TimerContainer>
      <TimerElement
        onClick={() => toggleTimer()}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <IconContainer>
          {hovered ? (
            <Icon
              name={paused ? 'play_arrow' : 'pause'}
              size={70}
              color={'white'}
            />
          ) : (
            formatTime(time)
          )}
        </IconContainer>
      </TimerElement>
    </TimerContainer>
  );
};

export default MeditationTimer;
