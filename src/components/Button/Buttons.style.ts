import styled from '@emotion/styled';
import { color } from '@styles/colors';

export const StyledButton = styled.button<{
  width: number;
  height: number;
  dark?: boolean;
  bold?: boolean;
  borderRadius?: number;
  fontSize?: number;
  textColor?: keyof typeof color;
  backgroundColor?: keyof typeof color;
  border?: keyof typeof color;
  padding?: boolean;
}>`
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: ${({ theme, dark, border }) =>
    dark === true
      ? 'none'
      : dark === false
      ? `1px solid ${theme.color.white500}`
      : `1px solid ${theme.color[border]}`};
  background-color: ${({ theme, dark, backgroundColor }) =>
    backgroundColor
      ? theme.color[backgroundColor]
      : dark
      ? theme.color.purpleDark
      : theme.color.white};
  color: ${({ theme, dark, textColor = 'black' }) =>
    dark ? theme.color.white : theme.color[textColor]};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 10)}px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
  ${({ padding }) => !padding && `padding: 0`}
`;
