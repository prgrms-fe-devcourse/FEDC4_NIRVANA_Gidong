import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)<{ size: number; color: string }>`
  color: ${({ theme, color }) => theme[color]};
  font-size: ${({ size }) => size}px;
  text-decoration: none;
  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme['purpleDark']};
  }
`;
