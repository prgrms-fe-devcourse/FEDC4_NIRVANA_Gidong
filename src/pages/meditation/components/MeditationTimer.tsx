import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { Icon } from '@components/Icon';
import formatTime from '@utils/formatTime';
import {
  IconContainer,
  TimerContainer,
  TimerElement
} from './MeditationTimer.style';
import {
  EVENT_NAME_MEDITATION_ENDED,
  EVENT_NAME_MEDITATION_STARTED,
  ICON_NAME_PAUSE,
  ICON_NAME_PLAY
} from '@pages/meditation/constants';
import { meditationTime } from '../states';

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
        document.dispatchEvent(new Event(EVENT_NAME_MEDITATION_ENDED));
        return prevTime;
      });
    }, 1000);

    document.dispatchEvent(new Event(EVENT_NAME_MEDITATION_STARTED));
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
              name={paused ? ICON_NAME_PLAY : ICON_NAME_PAUSE}
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
