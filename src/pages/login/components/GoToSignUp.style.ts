import styled from '@emotion/styled';

export const GoToSignUpContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  ${({ theme }) => theme.style.flexAlignCenter};
  flex-direction: column;
`;

export const Message = styled.span`
  width: 100%;
  ${({ theme }) => theme.style.flexJustifyCenter};
  color: ${({ theme }) => theme.color.greyLight};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const LinkContainer = styled.div`
  width: 100%;
  ${({ theme }) => theme.style.flexJustifyCenter};
  margin-left: -10px;
`;
