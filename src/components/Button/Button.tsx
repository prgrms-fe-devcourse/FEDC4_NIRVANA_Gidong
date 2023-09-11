import { StyledButton } from './Buttons.style';

interface ButtonProps {
  width: number;
  height: number;
  dark: boolean;
  label?: string;
  handleClick?: () => void;
  bold: boolean;
}

const Button = ({
  width,
  height,
  label,
  handleClick,
  dark,
  bold
}: ButtonProps) => (
  <StyledButton
    width={width}
    height={height}
    onClick={handleClick}
    dark={dark}
    bold={bold}>
    {label}
  </StyledButton>
);

export default Button;
