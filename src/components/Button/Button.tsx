import { color } from '@styles/colors';
import { StyledButton } from './Buttons.style';

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
  backgroundColor?: string;
  border?: string;
  padding?: boolean;
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
  children
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
    disabled={disabled}
    backgroundColor={backgroundColor}
    border={border}
    padding={padding}>
    {label}
    {children}
  </StyledButton>
);

export default Button;
