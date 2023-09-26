import styled from '@emotion/styled';

export const UserIdSpan = styled.span<{ size: number }>`
  font-size: ${({ size }) => size}px;
  color: ${({ theme }) => theme.color.greyLight};
`;
