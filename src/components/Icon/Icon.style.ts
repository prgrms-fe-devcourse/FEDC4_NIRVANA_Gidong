import styled from '@emotion/styled';

export const StyledIcon = styled.span<{ size: number; color: string }>`
  color: ${({ theme, color }) => theme[color]};
  font-size: ${({ size }) => size}px;
`;
