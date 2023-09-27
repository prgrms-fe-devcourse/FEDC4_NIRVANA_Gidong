import { StyledNavLink, StyledLink } from './Link.style';
import { color } from '@styles/colors';

interface State {
  [key: string]: any;
}

interface LinkProps {
  children: React.ReactNode;
  pageLink: string;
  size: number;
  state: State;
  color: keyof typeof color;
  setActiveStyle?: boolean;
}

const Link = ({
  children,
  pageLink,
  size = 14,
  color = 'black',
  state,
  setActiveStyle = false
}: Partial<LinkProps>) => {
  return (
    <>
      {setActiveStyle ? (
        <StyledNavLink
          state={{ ...state }}
          to={pageLink}
          size={size}
          color={color}>
          {children}
        </StyledNavLink>
      ) : (
        <StyledLink
          state={{ ...state }}
          to={pageLink}
          size={size}
          color={color}>
          {children}
        </StyledLink>
      )}
    </>
  );
};

export default Link;
