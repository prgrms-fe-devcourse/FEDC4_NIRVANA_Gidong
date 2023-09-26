import { NavLink, Link } from 'react-router-dom';
import { color } from '@styles/colors';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)<{
  size: number;
  color: keyof typeof color;
}>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ size }) => size}px;
  text-decoration: none;
  text-align: left;
  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.color.purpleDark};
  }
`;

export const StyledLink = styled(Link)<{
  size: number;
  color: keyof typeof color;
}>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ size }) => size}px;
  text-decoration: none;
  text-align: left;
`;
