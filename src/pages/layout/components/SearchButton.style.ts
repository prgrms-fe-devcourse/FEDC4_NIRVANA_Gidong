import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  width: 40px;
  height: 100%;
  ${({ theme }) => theme.style.flexCenter}
  & > button {
    border: none;
    background: none;
    padding: 0;
  }
`;
