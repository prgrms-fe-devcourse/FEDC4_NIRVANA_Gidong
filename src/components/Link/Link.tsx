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
  setActiveStyle?: boolean;
}

const Link = ({
  children,
  pageLink,
  size = 14,
  color = 'black',
  state,
  setActiveStyle = true
}: Partial<LinkProps>) => {
  return (
    <StyledNavLink
      state={{ ...state }}
      to={pageLink}
      size={size}
      color={color}
      setActiveStyle={setActiveStyle}>
      {children}
    </StyledNavLink>
  );
};

export default Link;
