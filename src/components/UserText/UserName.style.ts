import styled from '@emotion/styled';

export const UserNameSpan = styled.span<{ size: number }>`
  font-size: ${({ size }) => size}px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
`;
