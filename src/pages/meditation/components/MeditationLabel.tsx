import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import {
  MEDITATION_ENDED,
  MEDITATION_NOT_STARTED,
  MEDITATION_ONGOING
} from '@pages/meditation/constants/meditation';

const StyledMeditationLabel = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
`;

const MeditationLabel = () => {
  useEffect(() => {
    document.addEventListener('START-MEDITATION', () => {
      setLabel(MEDITATION_ONGOING);
    });
    document.addEventListener('END-MEDITATION', () => {
      setLabel(MEDITATION_ENDED);
    });
    return () => {
      document.removeEventListener('START-MEDITATION', () => {
        setLabel(MEDITATION_ONGOING);
      });
      document.removeEventListener('END-MEDITATION', () => {
        setLabel(MEDITATION_ENDED);
      });
    };
  }, []);
  const [label, setLabel] = useState(MEDITATION_NOT_STARTED);
  return <StyledMeditationLabel>{label}</StyledMeditationLabel>;
};

export default MeditationLabel;
