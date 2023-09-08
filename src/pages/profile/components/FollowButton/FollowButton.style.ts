import styled from '@emotion/styled';

export const Button = styled.button`
  width: 68px;
  height: 30px;
  background-color: ${({ theme }) => theme.purpleDark};
  border-radius: 30px;
  color: ${({ theme }) => theme.white};
  font-weight: 700;
`;
