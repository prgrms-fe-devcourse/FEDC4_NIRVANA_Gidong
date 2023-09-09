import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const MEDITATION_NOT_STARTED = '명상 시간을 설정해주세요.';
const MEDITATION_ONGOING = '편안한 명상 되세요.';
const MEDITATION_ENDED = '명상이 종료되었습니다.';

const StyledMeditationLabel = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme['white']};
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
