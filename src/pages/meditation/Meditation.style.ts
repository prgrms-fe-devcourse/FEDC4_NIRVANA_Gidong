import styled from '@emotion/styled';
import { MeditationStatusType } from '@pages/meditation/types';

interface MeditationPageProps {
  meditationStatus: MeditationStatusType;
}

export const MeditationPage = styled.div<MeditationPageProps>`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  height: ${({ meditationStatus }) =>
    meditationStatus.started && !meditationStatus.paused ? '100vh' : '100%'};
  width: 100%;
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;
