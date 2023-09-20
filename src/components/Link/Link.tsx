import { StyledNavLink } from './Link.style';

interface State {
  [key: string]: any;
}

interface LinkProps {
  children: React.ReactNode;
  pageLink: string;
  size: number;
  color: string;
  state: State;
}

const Link = ({
  children,
  pageLink,
  size = 14,
  color = '#000',
  state
}: Partial<LinkProps>) => {
  return (
    <StyledNavLink
      state={{ state }}
      to={pageLink}
      size={size}
      color={color}>
      {children}
    </StyledNavLink>
  );
};

export default Link;
