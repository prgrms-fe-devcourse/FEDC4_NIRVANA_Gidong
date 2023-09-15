import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { ThemePickerContainer } from './ThemePicker.style';
import {
  EVENT_NAME_MEDITATION_ENDED,
  EVENT_NAME_MEDITATION_STARTED,
  CONCENTRATION_KEY
} from '@pages/meditation/constants';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';

const MeditationThemePicker = () => {
  const containerRef = useRef(null);
  const [pickerShown, setPickerShown] = useState(true);
  const [picked, setPicked] = useState(
    meditationChannelInfo.get(CONCENTRATION_KEY)
  );
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const handleContainerScroll = (event: React.UIEvent<HTMLElement>): void => {
    event.preventDefault();
    const splitContainer = event.currentTarget.scrollWidth - event.currentTarget.clientWidth > 0 ? true : false;
    const splitPicxel = event.currentTarget.scrollWidth - event.currentTarget.clientWidth;
    const { scrollLeft } = event.currentTarget;

    if (splitContainer && scrollLeft > splitPicxel) {
      console.log('끝에 도달!');
      // todo: 다음 버튼을 disabled
    } 
    if (splitContainer && scrollLeft < 0) {
      console.log('처음!');
      // todo: 이전 버튼을 disabled 
    }
  }

  useEffect(() => {
    if (containerRef.current && containerRef.current.clientWidth < 500) {
      setShowNextButton(true);
    }
    document.addEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
      setPickerShown(false);
    });
    document.addEventListener(EVENT_NAME_MEDITATION_ENDED, () => {
      navigate('/posting', {
        state: {
          channelId: picked.id,
          channelLabel: picked.label,
          validation: true
        }
      });
    });
    return () => {
      document.removeEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
        setPickerShown(false);
      });
    };
  }, []);

  return (
    <ThemePickerContainer ref={containerRef} onScroll={handleContainerScroll}>
      {showPreviousButton && <PickerPreviousButton />}
      {pickerShown &&
        Array.from(meditationChannelInfo).map(([key, value]) => (
          <Button
            key={key}
            width={80}
            height={28}
            bold={false}
            dark={picked.label === value.label}
            label={value.label}
            handleClick={() => {
              setPicked(value);
            }}
          />
        ))}
        {showNextButton && <PickerNextButton />}
    </ThemePickerContainer>
  );
};

export default MeditationThemePicker;
