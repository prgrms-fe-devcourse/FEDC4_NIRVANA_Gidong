import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  TimeInput,
  TimeLabel,
  TimeSetterContainer
} from './MeditationTimeSetter.style';
import MeditationEndButton from '@pages/meditation/components/MeditationEndButton';
import {
  meditationStatus,
  meditationTime,
  totalMeditationTime
} from '@pages/meditation/states';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';

interface MeditationTimeSetterProps {
  themePicked: ThemeInfoType;
}

const MeditationTimeSetter = ({ themePicked }: MeditationTimeSetterProps) => {
  const [time, setTime] = useRecoilState<number>(meditationTime);
  const longClickIdRef = useRef<number>(null);
  const [totalTime, setTotalTime] = useRecoilState(totalMeditationTime);
  const [status, setStatus] = useRecoilState(meditationStatus);

  const navigate = useNavigate();
  useEffect(() => {
    const handleStartMeditation = () => {
      if (totalTime === 0) {
        setTotalTime(time);
      }
      setStatus({ ...status, started: true });
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
      setStatus({ ...status, ended: true });
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

  const isValidTimeControl = (
    buttonType: typeof BUTTON_TYPE_SUB | typeof BUTTON_TYPE_ADD
  ) => {
    return !(
      (time <= 240 && buttonType === BUTTON_TYPE_SUB) ||
      (time >= 1440 * 60 && buttonType === BUTTON_TYPE_ADD)
    );
  };

  const handleTime = (
    buttonType: typeof BUTTON_TYPE_SUB | typeof BUTTON_TYPE_ADD
  ) => {
    if (!isValidTimeControl(buttonType)) {
      return;
    }
    if (buttonType === BUTTON_TYPE_ADD) {
      setTime(time + FIVE_MINUTES_IN_SECONDS);
    } else {
      setTime(time - FIVE_MINUTES_IN_SECONDS);
    }
  };

  const handleLongClick = (
    buttonType: typeof BUTTON_TYPE_SUB | typeof BUTTON_TYPE_ADD
  ) => {
    if (!isValidTimeControl(buttonType)) {
      return;
    }
    if (buttonType === BUTTON_TYPE_ADD) {
      longClickIdRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime < 1440 * 60) {
            return prevTime + FIVE_MINUTES_IN_SECONDS;
          } else {
            return prevTime;
          }
        });
      }, 100);
    } else {
      longClickIdRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            prevTime -= FIVE_MINUTES_IN_SECONDS;
          }
          return prevTime;
        });
      }, 100);
    }
  };

  const handleTimeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === '') {
      setTime(0);
      return;
    } else {
      if (parseInt(value) > 1440) {
        setTime(1440 * 60);
      } else {
        setTime(parseInt(value) * 60);
      }
    }
  };

  return (
    <>
      {!status.started && (
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
          <TimeLabel>
            <TimeInput
              type={'text'}
              value={time / 60}
              onChange={handleTimeInput}
            />
            {'분'}
          </TimeLabel>
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
      {status.started && !status.ended && <MeditationEndButton />}
    </>
  );
};

export default MeditationTimeSetter;
