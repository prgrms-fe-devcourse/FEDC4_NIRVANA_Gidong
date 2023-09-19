import styled from '@emotion/styled';

export const GoToSignUpContainer = styled.div`
  margin-top: 30px;
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
`;

export const Message = styled.span`
  color: ${({ theme }) => theme.color.greyLight};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const LinkContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
`;
