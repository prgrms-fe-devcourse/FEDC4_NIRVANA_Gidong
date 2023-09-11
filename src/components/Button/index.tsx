import styled from '@emotion/styled';

const StyledButton = styled.button<
  Omit<ButtonProps, 'handleClick' | 'children'>
>`
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: ${({ theme, dark, borderSize }) =>
    dark ? 0 : `${borderSize ?? 0.5}px solid ${theme['greyLight']}`};
  background-color: ${({ theme, dark }) =>
    dark ? theme['purpleDark'] : theme['white']};
  color: ${({ theme, dark }) => (dark ? theme['white'] : theme['black'])};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 10)}px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ButtonProps {
  width: number;
  height: number;
  bold?: boolean;
  children?: React.ReactNode | string;
  dark?: boolean;
  label?: string;
  handleClick?: () => void;
  borderRadius?: number;
  borderSize?: number;
  fontSize?: number;
}

const Button = ({
  width,
  height,
  children,
  handleClick,
  label,
  dark,
  bold,
  borderRadius,
  borderSize,
  fontSize
}: ButtonProps) => (
  <StyledButton
    width={width}
    height={height}
    onClick={handleClick}
    dark={dark}
    bold={bold}
    borderRadius={borderRadius}
    borderSize={borderSize}
    fontSize={fontSize}>
    {label}
    {children}
  </StyledButton>
);

export default Button;
