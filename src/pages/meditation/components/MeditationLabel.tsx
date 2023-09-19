import { useEffect, useState } from 'react';
import { StyledLabel } from './MeditationLabel.style';
import {
  EVENT_NAME_MEDITATION_ENDED,
  EVENT_NAME_MEDITATION_STARTED,
  MEDITATION_ENDED,
  MEDITATION_NOT_STARTED,
  MEDITATION_ONGOING
} from '@pages/meditation/constants';

const MeditationLabel = () => {
  useEffect(() => {
    document.addEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
      setLabel(MEDITATION_ONGOING);
    });
    document.addEventListener(EVENT_NAME_MEDITATION_ENDED, () => {
      setLabel(MEDITATION_ENDED);
    });
    return () => {
      document.removeEventListener(EVENT_NAME_MEDITATION_STARTED, () => {
        setLabel(MEDITATION_ONGOING);
      });
      document.removeEventListener(EVENT_NAME_MEDITATION_ENDED, () => {
        setLabel(MEDITATION_ENDED);
      });
    };
  }, []);
  const [label, setLabel] = useState(MEDITATION_NOT_STARTED);
  return <StyledLabel>{label}</StyledLabel>;
};

export default MeditationLabel;
