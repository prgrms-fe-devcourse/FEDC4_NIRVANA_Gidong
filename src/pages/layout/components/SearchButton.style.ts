import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${({ theme }) => theme.style.flexCenter}
  & > button {
    border: none;
    background: none;
    padding: 0;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.black250};
  }
`;
