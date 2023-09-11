import styled from '@emotion/styled';
import { Icon } from '@components/Icon';
import { useRecoilState } from 'recoil';
import { meditationTime } from '@pages/meditation/components/MeditationTimer';
import { useState, useEffect } from 'react';
import MeditationEndButton from '@pages/meditation/components/MeditationEndButton';
import {
  BUTTON_TYPE_ADD,
  BUTTON_TYPE_SUB,
  COUNTER_BUTTON_SIZE,
  FIVE_MINUTES_IN_SECONDS
} from '@pages/meditation/constants/meditation';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  color: ${({ theme }) => theme.color.white};
  font-size: 2rem;
`;

const CounterText = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  background: none;
  width: 120px;
  border: none;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
`;

const SetTimeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const MeditationCounter = () => {
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

    document.addEventListener('START-MEDITATION', handleStartMeditation);
    document.addEventListener('END-MEDITATION', handleEndMeditation);

    return () => {
      document.removeEventListener('START-MEDITATION', handleStartMeditation);
      document.removeEventListener('END-MEDITATION', handleEndMeditation);
    };
  }, []);

  const handleTime = (buttonType: string) => {
    if (time === 0 && buttonType === BUTTON_TYPE_SUB) {
      return;
    } else {
      if (buttonType === BUTTON_TYPE_ADD) {
        setTime(time + FIVE_MINUTES_IN_SECONDS);
      } else {
        setTime(time - FIVE_MINUTES_IN_SECONDS);
      }
    }
  };

  return (
    <>
      {!timerStarted && (
        <CounterContainer>
          <SetTimeButton onClick={() => handleTime(BUTTON_TYPE_SUB)}>
            <Icon
              name={'chevron_left'}
              size={COUNTER_BUTTON_SIZE}
              color={'white'}
            />
          </SetTimeButton>
          <CounterText>{`${time / 60} 분`}</CounterText>
          <SetTimeButton onClick={() => handleTime(BUTTON_TYPE_ADD)}>
            <Icon
              name={'chevron_right'}
              size={COUNTER_BUTTON_SIZE}
              color={'white'}
            />
          </SetTimeButton>
        </CounterContainer>
      )}
      {timerStarted && !timerEnded && <MeditationEndButton />}
    </>
  );
};

export default MeditationCounter;
