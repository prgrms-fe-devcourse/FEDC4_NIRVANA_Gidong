import styled from '@emotion/styled';

export const StyledButton = styled.button<{
  width: number;
  height: number;
  dark: boolean;
  bold: boolean;
}>`
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: ${({ theme, dark }) =>
    dark ? 0 : `0.5px solid ${theme.color.greyLight}`};
  background-color: ${({ theme, dark }) =>
    dark ? theme.color.purpleDark : theme.color.white};
  color: ${({ theme, dark }) => (dark ? theme.color.white : theme.color.black)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  border-radius: 10px;
  font-size: 16px;
`;
