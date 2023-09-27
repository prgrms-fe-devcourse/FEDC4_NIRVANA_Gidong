import styled from '@emotion/styled';

interface MeditationPageProps {
  timerPaused: { started: boolean; ended: boolean };
}

export const MeditationPage = styled.div<MeditationPageProps>`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  height: ${({ timerPaused }) => (timerPaused.started ? '100vh' : '100%')};
  width: 100%;
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;
