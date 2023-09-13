import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { ThemePickerContainer } from './MeditationThemePicker.style';
import {
  EVENT_NAME_MEDITATION_ENDED,
  EVENT_NAME_MEDITATION_STARTED
} from '@pages/meditation/constants';

const meditationThemeLabels = new Map([
  ['65017a41dfe8db5726b603a7', '집중'],
  ['65003530a72a0d2e63f12878', '불안'],
  ['65017abcdfe8db5726b603c3', '자유'],
  ['65017aa2dfe8db5726b603ba', '휴식'],
  ['65017a5edfe8db5726b603b1', '스트레스']
]);

export const MeditationThemePicker = () => {
  const [pickerShown, setPickerShown] = useState(true);
  const [picked, setPicked] = useState({
    id: '65017a41dfe8db5726b603a7',
    label: '집중'
  });
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
      setPickerShown(false);
    });
    document.addEventListener(EVENT_NAME_MEDITATION_ENDED, () => {
      navigate('/posting', { state: { themeId: picked.id } });
    });
    return () => {
      document.removeEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
        setPickerShown(false);
      });
    };
  });
  return (
    <ThemePickerContainer>
      {pickerShown &&
        Array.from(meditationThemeLabels).map(([key, value]) =>
          picked.label === value ? (
            <Button
              width={80}
              height={28}
              key={key}
              dark={true}
              bold={false}
              label={value}
              handleClick={() => {
                console.log(value);
              }}
            />
          ) : (
            <Button
              width={80}
              height={28}
              key={key}
              dark={false}
              bold={false}
              label={value}
              handleClick={() => {
                setPicked({ id: key, label: value });
              }}
            />
          )
        )}
    </ThemePickerContainer>
  );
};
