import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Button } from '@components/Button';
import { NavContainer, ThemePickerContainer } from './ThemePicker.style';
import PickerPreviousButton from './PickerPreviousButton';
import PickerNextButton from './PickerNextButton';
import { EVENT_NAME_MEDITATION_STARTED } from '@pages/meditation/constants';
import useButtonShow from './hooks/useButtonShow';

import { pickedTheme } from '@pages/meditation/states';

interface MeditationThemePickerProps {
  themeInfo: Map<string, { label: string; id: string }>;
  handleClickTheme?: (selectedId: string) => void;
  dark?: boolean;
}

const MeditationThemePicker = ({
  themeInfo,
  handleClickTheme,
  dark = true
}: MeditationThemePickerProps) => {
  const [pickerShown, setPickerShown] = useState(true);
  const [picked, setPicked] = useRecoilState<{ id: string; label: string }>(
    pickedTheme
  );
  const [scrollRef, showPrevButton, showNextButton] = useButtonShow();

  const clickPrevButton = useCallback((scrollPixel: number) => {
    scrollRef.current.scrollLeft -= scrollPixel;
  }, []);

  const clickNextButton = useCallback((scrollPixel: number) => {
    scrollRef.current.scrollLeft += scrollPixel;
  }, []);

  useEffect(() => {
    document.addEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
      setPickerShown(false);
    });
    return () => {
      document.removeEventListener(EVENT_NAME_MEDITATION_STARTED, () =>
        setPickerShown(false)
      );
    };
  }, []);

  return (
    pickerShown && (
      <NavContainer>
        {showPrevButton && (
          <PickerPreviousButton
            clickPrevButton={clickPrevButton}
            color={dark ? 'white' : 'purpleDark'}
          />
        )}
        <ThemePickerContainer ref={scrollRef}>
          {Array.from(themeInfo).map(([key, value]) => (
            <Button
              key={key}
              width={80}
              height={28}
              bold={false}
              dark={picked.label === value.label}
              label={value.label}
              handleClick={() => {
                setPicked(value);
                handleClickTheme && handleClickTheme(value.id);
              }}
            />
          ))}
        </ThemePickerContainer>
        {showNextButton && (
          <PickerNextButton
            clickNextButton={clickNextButton}
            color={dark ? 'white' : 'purpleDark'}
          />
        )}
      </NavContainer>
    )
  );
};

export default MeditationThemePicker;
