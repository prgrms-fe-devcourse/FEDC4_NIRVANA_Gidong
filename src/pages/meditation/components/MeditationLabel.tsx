import { useEffect, useState } from 'react';
import { StyledLabel } from './MeditationLabel.style';
import {
  MEDITATION_ENDED,
  MEDITATION_NOT_STARTED,
  MEDITATION_ONGOING
} from '@pages/meditation/constants';

interface MeditationLabelProps {
  meditationStatus: { started: boolean; paused: boolean; ended: boolean };
}

const MeditationLabel = ({ meditationStatus }: MeditationLabelProps) => {
  useEffect(() => {
    if (meditationStatus.started) {
      setLabel(MEDITATION_ONGOING);
    }
    if (meditationStatus.ended) {
      setLabel(MEDITATION_ENDED);
    }
  }, [meditationStatus.started, meditationStatus.ended]);
  const [label, setLabel] = useState(MEDITATION_NOT_STARTED);
  return <StyledLabel>{label}</StyledLabel>;
};

export default MeditationLabel;
