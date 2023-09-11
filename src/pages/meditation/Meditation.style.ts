import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.color.linearGradientPurple};
`;
