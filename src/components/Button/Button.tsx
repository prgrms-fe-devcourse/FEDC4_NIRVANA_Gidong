import { StyledButton } from './Buttons.style';

interface ButtonProps {
  width: number;
  height: number;
  dark?: boolean;
  label?: string;
  handleClick?: () => void;
  bold?: boolean;
  color?: string;
  fontSize?: number;
  borderRadius?: number;
  children?: React.ReactNode;
}

const Button = ({
  width,
  height,
  label,
  handleClick,
  dark,
  bold,
  color,
  fontSize,
  borderRadius,
  children
}: ButtonProps) => (
  <StyledButton
    width={width}
    height={height}
    onClick={handleClick}
    dark={dark}
    color={color}
    bold={bold}
    fontSize={fontSize}
    borderRadius={borderRadius}>
    {label}
    {children}
  </StyledButton>
);

export default Button;
