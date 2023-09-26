import { StyledButton } from './Buttons.style';
import { color } from '@styles/colors';

interface ButtonProps {
  width: number;
  height: number;
  dark?: boolean;
  label?: string;
  handleClick?: () => void;
  bold?: boolean;
  textColor?: keyof typeof color;
  fontSize?: number;
  borderRadius?: number;
  children?: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: keyof typeof color;
  border?: number;
}

const Button = ({
  width,
  height,
  label,
  handleClick,
  dark,
  bold,
  textColor,
  backgroundColor,
  border,
  fontSize,
  borderRadius,
  disabled,
  padding,
  children,
  backgroundColor
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
    backgroundColor={backgroundColor}
    border={border}
    disabled={disabled}>
    {label}
    {children}
  </StyledButton>
);

export default Button;
