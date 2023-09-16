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
import useScrollButton from './hooks/useScrollButton';

interface MeditationThemePickerProps {
  themeInfo: Map<string, { label: string; id: string }>;
}

const MeditationThemePicker = ({ themeInfo }: MeditationThemePickerProps) => {
  const [pickerShown, setPickerShown] = useState(true);
  const [picked, setPicked] = useState(themeInfo.get(CONCENTRATION_KEY));
  const [
    scrollRef,
    showPrevButton,
    showNextButton,
    clickPrevButton,
    clickNextButton
  ] = useScrollButton();
  const navigate = useNavigate();

  useEffect(() => {
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
      document.removeEventListener(EVENT_NAME_MEDITATION_STARTED, () =>
        setPickerShown(false)
      );
    };
  }, []);

  return (
    <NavContainer>
      {showPrevButton && (
        <PickerPreviousButton
          clickPrevButton={clickPrevButton}
          color={'white'}
        />
      )}
      <ThemePickerContainer ref={scrollRef}>
        {pickerShown &&
          Array.from(themeInfo).map(([key, value]) => (
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
