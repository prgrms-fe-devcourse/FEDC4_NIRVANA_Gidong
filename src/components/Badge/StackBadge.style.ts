import styled from '@emotion/styled';

export const StackBadgeContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter}
  width: 50px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.purpleVivid};
  color: ${({ theme }) => theme.color.white};
  font-size: 0.875rem;
  border-radius: 30px;
`;
