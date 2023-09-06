import styled from '@emotion/styled';

const StyledButton = styled.button<{
  width: number;
  height: number;
  dark: boolean;
  bold: boolean;
}>`
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: ${({ theme, dark }) =>
    dark ? 0 : `0.5px solid ${theme['greyLight']}`};
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
