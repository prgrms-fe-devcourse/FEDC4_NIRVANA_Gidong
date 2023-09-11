import { StyledNavLink } from './Link.style';

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
