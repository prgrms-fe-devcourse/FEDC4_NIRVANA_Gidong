import styled from '@emotion/styled';
import { useState } from 'react';

const StyledMeditationLabel = styled.div`
  ${({ theme }) => theme.style.flexJustifyCenter};
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
`;

const MeditationLabel = () => {
  const [label, setLabel] = useState('명상 시간을 설정해주세요.');
  return <StyledMeditationLabel>{label}</StyledMeditationLabel>;
};

export default MeditationLabel;
