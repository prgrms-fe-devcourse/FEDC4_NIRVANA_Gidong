import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
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
import { MeditationEndButton } from './';
import { meditationTime } from '../states';

const MeditationTimeSetter = () => {
  const [time, setTime] = useRecoilState<number>(meditationTime);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const handleStartMeditation = () => {
      setTimerStarted(true);
    };

    const handleEndMeditation = () => {
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
  }, []);

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

  return (
    <>
      {!timerStarted && (
        <TimeSetterContainer>
          <SetTimeButton onClick={() => handleTime(BUTTON_TYPE_SUB)}>
            <Icon
              name={'chevron_left'}
              size={COUNTER_BUTTON_SIZE}
              color={'white'}
            />
          </SetTimeButton>
          <TimeLabel>{`${time / 60} 분`}</TimeLabel>
          <SetTimeButton onClick={() => handleTime(BUTTON_TYPE_ADD)}>
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
