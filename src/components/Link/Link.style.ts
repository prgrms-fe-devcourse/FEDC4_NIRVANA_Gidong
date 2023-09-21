import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)<{ size: number; color: string }>`
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  height: 100%;
  font-size: ${({ size }) => size}px;
  text-decoration: none;
  text-align: left;
  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.color.purpleDark};
  }
`;
