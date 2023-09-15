import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { ThemePickerContainer } from './MeditationThemePicker.style';
import {
  EVENT_NAME_MEDITATION_ENDED,
  EVENT_NAME_MEDITATION_STARTED,
  CONCENTRATION_KEY
} from '@pages/meditation/constants';
import { meditationChannelInfo } from './models/channelInfo';

const MeditationThemePicker = () => {
  const [pickerShown, setPickerShown] = useState(true);
  const [picked, setPicked] = useState(
    meditationChannelInfo.get(CONCENTRATION_KEY)
  );
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
      document.removeEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
        setPickerShown(false);
      });
    };
  });
  return (
    <ThemePickerContainer>
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
  );
};

export default MeditationThemePicker;
