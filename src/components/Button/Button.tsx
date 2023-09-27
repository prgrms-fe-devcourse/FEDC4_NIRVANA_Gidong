import { StyledButton } from './Buttons.style';
import { color } from '@styles/colors';

interface ButtonProps {
  width: number;
  height: number;
  dark?: boolean;
  label?: string;
  handleClick?: () => void;
  bold?: boolean;
  border?: keyof typeof color;
  textColor?: keyof typeof color;
  fontSize?: number;
  borderRadius?: number;
  children?: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: keyof typeof color;
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
  disabled,
  border = 'transparent',
  backgroundColor
}: ButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={handleClick}
      dark={dark}
      textColor={textColor}
      bold={bold}
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
      disabled={disabled}
      backgroundColor={backgroundColor}>
      {label}
      {children}
    </StyledButton>
  );
};

export default Button;
