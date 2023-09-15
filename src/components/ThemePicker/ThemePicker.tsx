import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { NavContainer, ThemePickerContainer } from './ThemePicker.style';
import PickerPreviousButton from './PickerPreviousButton';
import PickerNextButton from './PickerNextButton';
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

  const handleButtonShow = () => {
    const { clientWidth } = containerRef.current;
    const { scrollWidth } = containerRef.current;
    const { scrollLeft } = containerRef.current;

    const splitContainer = scrollWidth - clientWidth > 0;
    const splitPixcel = scrollWidth - clientWidth;

    if (!splitContainer) {
      setShowPreviousButton(false);
      setShowNextButton(false);
      return;
    }
    if (scrollLeft > 0) {
      setShowPreviousButton(true);
    } else {
      setShowPreviousButton(false);
    }
    if (scrollLeft < splitPixcel - 5) {
      setShowNextButton(true);
    } else {
      setShowNextButton(false);
    }
  };

  const clickPrevButton = () => {
    containerRef.current.scrollLeft -= 250;
  };

  const clickNextButton = () => {
    containerRef.current.scrollLeft += 250;
  };

  useEffect(() => {
    handleButtonShow();
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
    window.addEventListener('resize', handleButtonShow);
    return () => {
      document.removeEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
        setPickerShown(false);
      });
      window.removeEventListener('resize', handleButtonShow);
    };
  }, []);

  return (
    <NavContainer>
      {showPreviousButton && (
        <PickerPreviousButton
          clickPrevButton={clickPrevButton}
          color={'white'}
        />
      )}
      <ThemePickerContainer
        ref={containerRef}
        onScroll={handleButtonShow}>
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
      </ThemePickerContainer>
      {showNextButton && (
        <PickerNextButton
          clickNextButton={clickNextButton}
          color={'white'}
        />
      )}
    </NavContainer>
  );
};

export default MeditationThemePicker;
