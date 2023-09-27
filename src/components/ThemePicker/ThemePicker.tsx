import { useCallback, useEffect, useState } from 'react';
import { Button } from '@components/Button';
import { NavContainer, ThemePickerContainer } from './ThemePicker.style';
import PickerPreviousButton from './PickerPreviousButton';
import PickerNextButton from './PickerNextButton';
import {
  CONCENTRATION_KEY,
  EVENT_NAME_MEDITATION_STARTED
} from '@pages/meditation/constants';
import useButtonShow from './hooks/useButtonShow';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';

interface MeditationThemePickerProps {
  themeInfo: Map<string, { label: string; id: string }>;
  handleClickTheme?: (selected: ThemeInfoType) => void;
  dark?: boolean;
}

export interface ThemeInfoType {
  label: string;
  id: string;
}

const MeditationThemePicker = ({
  themeInfo,
  handleClickTheme,
  dark = true
}: MeditationThemePickerProps) => {
  const [picked, setPicked] = useState<ThemeInfoType>(
    meditationChannelInfo.get(CONCENTRATION_KEY)
  );
  const [pickerShown, setPickerShown] = useState(true);
  const [scrollRef, showPrevButton, showNextButton] = useButtonShow();

  const clickPrevButton = useCallback(
    (scrollPixel: number) => {
      scrollRef.current.scrollLeft -= scrollPixel;
    },
    [scrollRef]
  );

  const clickNextButton = useCallback(
    (scrollPixel: number) => {
      scrollRef.current.scrollLeft += scrollPixel;
    },
    [scrollRef]
  );

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
                handleClickTheme && handleClickTheme(value);
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
