import styled from '@emotion/styled';

const StyledButton = styled.button<{
  width: number;
  height: number;
  dark: boolean;
  bold: boolean;
}>`
  border: 0;
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme, dark }) =>
    dark ? theme['purpleDark'] : theme['white']};
  color: ${({ theme, dark }) => (dark ? theme['white'] : theme['black'])};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  border-radius: 10px;
  font-size: 1rem;
`;

interface ButtonProps {
  width: number;
  height: number;
  label?: string;
  handleClick: () => void;
  dark: boolean;
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
