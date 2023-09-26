import { NavLink } from 'react-router-dom';
import { color } from '@styles/colors';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)<{
  size: number;
  setActiveStyle: boolean;
  color: keyof typeof color;
}>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ size }) => size}px;
  text-decoration: none;
  text-align: left;
  &.active {
    ${({ setActiveStyle }) =>
      setActiveStyle ? 'text-decoration: underline; font-weight: bold;' : ''};
    ${({ theme, setActiveStyle }) =>
      setActiveStyle
        ? `text-decoration-color: ${theme.color.purpleDark};`
        : ''};
  }
`;
