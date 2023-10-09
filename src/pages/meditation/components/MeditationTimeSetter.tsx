import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Icon } from '@components/Icon';
import {
  BUTTON_TYPE_ADD,
  BUTTON_TYPE_SUB,
  COUNTER_BUTTON_SIZE,
  MEDITATION_TIME_UNIT
} from '@pages/meditation/constants';
import {
  SetTimeButton,
  TimeInput,
  TimeLabel,
  TimeSetterContainer
} from './MeditationTimeSetter.style';
import MeditationEndButton from '@pages/meditation/components/MeditationEndButton';
import { meditationTime, totalMeditationTime } from '@pages/meditation/states';
import { ThemeInfoType } from '@components/ThemePicker/ThemePicker';

interface MeditationTimeSetterProps {
  themePicked: ThemeInfoType;
  meditationStatus: { started: boolean; paused: boolean; ended: boolean };
}

const MeditationTimeSetter = ({
  themePicked,
  meditationStatus
}: MeditationTimeSetterProps) => {
  const [time, setTime] = useRecoilState<number>(meditationTime);
  const longClickIdRef = useRef<number>(null);
  const [totalTime, setTotalTime] = useRecoilState(totalMeditationTime);

  const navigate = useNavigate();
  useEffect(() => {
    const handleStartMeditation = () => {
      if (totalTime === 0) {
        setTotalTime(time);
      }
    };

    const handleEndMeditation = () => {
      const headerEl = document.querySelector('header');
      const footerEl = document.querySelector('footer');

      headerEl.style.display = 'flex';
      footerEl.style.display = 'flex';
      navigate('/posting', {
        state: {
          channelId: themePicked.id,
          channelLabel: themePicked.label,
          totalTime: totalTime,
          validation: true
        }
      });
    };

    if (meditationStatus.started) {
      handleStartMeditation();
    }
    if (meditationStatus.ended) {
      handleEndMeditation();
    }
  }, [meditationStatus.started, meditationStatus.ended]);

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
      setTime(time + MEDITATION_TIME_UNIT);
    } else {
      setTime(time - MEDITATION_TIME_UNIT);
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
            return prevTime + MEDITATION_TIME_UNIT;
          } else {
            return prevTime;
          }
        });
      }, 100);
    } else {
      longClickIdRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            prevTime -= MEDITATION_TIME_UNIT;
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
      {!meditationStatus.started && (
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
      {meditationStatus.started && !meditationStatus.ended && (
        <MeditationEndButton />
      )}
    </>
  );
};

export default MeditationTimeSetter;
