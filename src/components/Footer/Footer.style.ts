import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: white;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.03125rem ${({ theme }) => theme.color.greyLight} solid;
  padding: 0 35px;
`;
