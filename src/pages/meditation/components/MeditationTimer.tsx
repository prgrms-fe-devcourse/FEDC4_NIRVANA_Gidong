import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
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
  useEffect(() => {
    const headerEl = document.querySelector('header');
    const footerEl = document.querySelector('footer');
    if (paused) {
      headerEl.style.display = 'flex';
      footerEl.style.display = 'flex';
    } else {
      headerEl.style.display = 'none';
      footerEl.style.display = 'none';
    }
  }, [paused]);

  return (
    <TimerContainer timerPaused={timerId && paused}>
      <TimerElement
        timerPaused={timerId && paused}
        onClick={() => toggleTimer()}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={(event) => {
          setHovered(false);
          event.preventDefault();
          toggleTimer();
        }}>
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
