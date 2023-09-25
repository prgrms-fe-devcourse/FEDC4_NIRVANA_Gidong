import { StyledNavLink } from './Link.style';
import { color } from '@styles/colors';

interface State {
  [key: string]: any;
}

interface LinkProps {
  children: React.ReactNode;
  pageLink: string;
  size: number;
  color: keyof typeof color;
  state: State;
}

const Link = ({
  children,
  pageLink,
  size = 14,
  color = 'black',
  state
}: Partial<LinkProps>) => {
  return (
    <StyledNavLink
      state={{ ...state }}
      to={pageLink}
      size={size}
      color={color}>
      {children}
    </StyledNavLink>
  );
};

export default Link;
