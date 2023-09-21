import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  & > button {
    border: none;
    background: none;
    padding: 0;
  }
`;
