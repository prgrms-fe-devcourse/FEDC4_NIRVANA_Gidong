import { StyledButton } from './Buttons.style';

interface ButtonProps {
  width: number;
  height: number;
  dark?: boolean;
  label?: string;
  handleClick?: () => void;
  bold?: boolean;
  textColor?: string;
  fontSize?: number;
  borderRadius?: number;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  width,
  height,
  label,
  handleClick,
  dark,
  bold,
  textColor,
  fontSize,
  borderRadius,
  children,
  disabled
}: ButtonProps) => (
  <StyledButton
    width={width}
    height={height}
    onClick={handleClick}
    dark={dark}
    textColor={textColor}
    bold={bold}
    fontSize={fontSize}
    borderRadius={borderRadius}
    disabled={disabled}>
    {label}
    {children}
  </StyledButton>
);

export default Button;
