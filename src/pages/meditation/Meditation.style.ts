import styled from '@emotion/styled';

export const MeditationPage = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;
