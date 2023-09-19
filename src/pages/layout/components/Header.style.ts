import styled from '@emotion/styled';

export const HeaderSection = styled.header<{ search: boolean }>`
  position: relative;
  height: 50px;
  background-color: ${({ theme }) => theme.color.purpleDark};
  ${({ theme, search }) =>
    search
      ? theme.style.flexCenter
      : `display: flex;
      justify-content: space-between;`};
  padding: 0 18px;
`;
