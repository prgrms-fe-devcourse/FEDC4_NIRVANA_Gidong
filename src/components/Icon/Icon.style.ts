import styled from '@emotion/styled';
import { color } from '@styles/colors';

export const StyledIcon = styled.span<{
  size: number;
  color: keyof typeof color;
  fill?: string;
}>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ size }) => size}px;
  font-variation-settings: ${({ fill }) => fill};
`;
