import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Icon } from '@components/Icon';
import {
  BUTTON_TYPE_ADD,
  BUTTON_TYPE_SUB,
  COUNTER_BUTTON_SIZE,
  EVENT_NAME_MEDITATION_ENDED,
  EVENT_NAME_MEDITATION_STARTED,
  FIVE_MINUTES_IN_SECONDS
} from '@pages/meditation/constants';
import {
  SetTimeButton,
  TimeLabel,
  TimeSetterContainer
} from './MeditationTimeSetter.style';
import MeditationEndButton from '@pages/meditation/components/MeditationEndButton';
import {
  meditationTime,
  pickedTheme,
  totalMeditationTime
} from '@pages/meditation/states';

const MeditationTimeSetter = () => {
  const [time, setTime] = useRecoilState<number>(meditationTime);
  const longClickIdRef = useRef<number>(null);
  const [totalTime, setTotalTime] = useRecoilState(totalMeditationTime);
  const themePicked = useRecoilValue(pickedTheme);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleStartMeditation = () => {
      if (totalTime === 0) {
        setTotalTime(time);
      }
      setTimerStarted(true);
    };

    const handleEndMeditation = () => {
      navigate('/posting', {
        state: {
          channelId: themePicked.id,
          channelLabel: themePicked.label,
          totalTime: totalTime,
          validation: true
        }
      });
      setTimerEnded(true);
    };

    document.addEventListener(
      EVENT_NAME_MEDITATION_STARTED,
      handleStartMeditation
    );
    document.addEventListener(EVENT_NAME_MEDITATION_ENDED, handleEndMeditation);

    return () => {
      document.removeEventListener(
        EVENT_NAME_MEDITATION_STARTED,
        handleStartMeditation
      );
      document.removeEventListener(
        EVENT_NAME_MEDITATION_ENDED,
        handleEndMeditation
      );
    };
  });

  const handleTime = (buttonType: string) => {
    if (time === 0 && buttonType === BUTTON_TYPE_SUB) {
      return;
    }
    if (buttonType === BUTTON_TYPE_ADD) {
      setTime(time + FIVE_MINUTES_IN_SECONDS);
    } else {
      setTime(time - FIVE_MINUTES_IN_SECONDS);
    }
  };

  const handleLongClick = (buttonType: string) => {
    if (time === 0 && buttonType === BUTTON_TYPE_SUB) {
      return;
    }
    if (buttonType === BUTTON_TYPE_ADD) {
      longClickIdRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime < 3600) {
            return prevTime + FIVE_MINUTES_IN_SECONDS;
          }
          return prevTime;
        });
      }, 100);
    } else {
      longClickIdRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - FIVE_MINUTES_IN_SECONDS;
          }
          return prevTime;
        });
      }, 100);
    }
  };

  return (
    <>
      {!timerStarted && (
        <TimeSetterContainer>
          <SetTimeButton
            onClick={() => handleTime(BUTTON_TYPE_SUB)}
            onMouseDown={() => handleLongClick(BUTTON_TYPE_SUB)}
            onMouseUp={() => clearInterval(longClickIdRef.current)}
            onMouseLeave={() => clearInterval(longClickIdRef.current)}
            onTouchStart={() => handleLongClick(BUTTON_TYPE_SUB)}
            onTouchEnd={() => clearInterval(longClickIdRef.current)}>
            <Icon
              name={'chevron_left'}
              size={COUNTER_BUTTON_SIZE}
              color={'white'}
            />
          </SetTimeButton>
          <TimeLabel>{`${time / 60} 분`}</TimeLabel>
          <SetTimeButton
            onClick={() => handleTime(BUTTON_TYPE_ADD)}
            onMouseDown={() => handleLongClick(BUTTON_TYPE_ADD)}
            onMouseUp={() => clearInterval(longClickIdRef.current)}
            onMouseLeave={() => clearInterval(longClickIdRef.current)}
            onTouchStart={() => handleLongClick(BUTTON_TYPE_ADD)}
            onTouchEnd={() => clearInterval(longClickIdRef.current)}>
            <Icon
              name={'chevron_right'}
              size={COUNTER_BUTTON_SIZE}
              color={'white'}
            />
          </SetTimeButton>
        </TimeSetterContainer>
      )}
      {timerStarted && !timerEnded && <MeditationEndButton />}
    </>
  );
};

export default MeditationTimeSetter;
