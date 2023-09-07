import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)<{ size: number; color: string }>`
  color: ${({ theme, color }) => theme[color]};
  font-size: ${({ size }) => size}px;
  text-decoration: none;
  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme['purpleDark']};
  }
`;

interface LinkProps {
  children: React.ReactNode;
  pageLink: string;
  size: number;
  color: string;
}

const Link = ({
  children,
  pageLink,
  size = 14,
  color = '#000'
}: Partial<LinkProps>) => {
  return (
    <StyledNavLink
      to={pageLink}
      size={size}
      color={color}>
      {children}
    </StyledNavLink>
  );
};

export default Link;
