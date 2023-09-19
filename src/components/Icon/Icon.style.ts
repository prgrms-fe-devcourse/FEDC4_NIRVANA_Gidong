import styled from '@emotion/styled';

export const StyledIcon = styled.span<{
  size: number;
  color: string;
  fill?: boolean;
}>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ size }) => size}px;
  font-variation-settings: ${({ fill }) => (fill ? `'FILL' 1` : `'FILL' 0`)};
`;
