import styled from '@emotion/styled';
import Icon from '@components/Icon';
import { useRecoilState } from 'recoil';
import { meditationTime } from '@pages/meditation/components/MeditationTimer';
import { useState, useEffect } from 'react';
import MeditationEndButton from '@pages/meditation/components/MeditationEndButton';

const FIVE_MINUTES_IN_SECONDS = 300;
const BUTTON_SIZE = 90;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  color: ${({ theme }) => theme['white']};
  font-size: 2rem;
`;

const CounterText = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetTimeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const MeditationCounter = () => {
  const [time, setTime] = useRecoilState(meditationTime);
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
    if (time === 0 && buttonType === 'sub') {
      return;
    } else {
      if (buttonType === 'add') {
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
          <SetTimeButton onClick={() => handleTime('sub')}>
            <Icon
              name={'chevron_left'}
              size={BUTTON_SIZE}
              color={'white'}
            />
          </SetTimeButton>
          <CounterText>{`${time / 60} 분`}</CounterText>
          <SetTimeButton onClick={() => handleTime('add')}>
            <Icon
              name={'chevron_right'}
              size={BUTTON_SIZE}
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
