import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Icon } from '@components/Icon';
import formatTime from '@utils/formatTime';
import {
  IconContainer,
  TimerContainer,
  TimerElement,
  TimerElementBorder
} from './MeditationTimer.style';
import { ICON_NAME_PAUSE, ICON_NAME_PLAY } from '@pages/meditation/constants';
import { intervalId, meditationTime } from '@pages/meditation/states';
import { MeditationStatusType } from '@pages/meditation/types';

interface MeditationTimerProps {
  meditationStatus: MeditationStatusType;
  statusSetter: React.Dispatch<React.SetStateAction<MeditationStatusType>>;
}

const MeditationTimer = ({
  meditationStatus,
  statusSetter
}: MeditationTimerProps) => {
  const [time, setTime] = useRecoilState(meditationTime);
  const [timerId, setTimerId] = useRecoilState(intervalId);
  const [hovered, setHovered] = useState(false);

  const startTimer = () => {
    if (time === 0) {
      return;
    }
    statusSetter({ ...meditationStatus, paused: false });

    setTimerId(
      setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          clearInterval(timerId);
          statusSetter({ ...meditationStatus, paused: true, ended: true });
          setTimerId(0);
          return prevTime;
        });
      }, 1000)
    );

    statusSetter({ ...meditationStatus, started: true, paused: false });
  };

  const toggleTimer = () => {
    if (!meditationStatus.paused) {
      clearInterval(timerId);
      statusSetter({ ...meditationStatus, paused: true });
    } else {
      startTimer();
    }
  };
  useEffect(() => {
    const headerEl = document.querySelector('header');
    const footerEl = document.querySelector('footer');
    if (meditationStatus.paused) {
      headerEl.style.display = 'flex';
      footerEl.style.display = 'flex';
    } else {
      headerEl.style.display = 'none';
      footerEl.style.display = 'none';
    }
  }, [meditationStatus.paused]);

  return (
    <TimerContainer>
      <TimerElementBorder timerPaused={timerId && meditationStatus.paused} />
      <TimerElement
        timerPaused={timerId && meditationStatus.paused}
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
              name={meditationStatus.paused ? ICON_NAME_PLAY : ICON_NAME_PAUSE}
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
