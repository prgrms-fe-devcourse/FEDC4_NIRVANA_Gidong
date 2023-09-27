import styled from '@emotion/styled';

export const PasswordHintContainer = styled.div<{
  fontSize: number;
  color: string;
}>`
  padding-top: 20px;
  width: 80%;
  min-width: 250px;
  max-width: 450px;
  line-height: 1.5;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
  color: ${({ color, theme }) => (color ? color : theme.color.greyLight)};
  white-space: pre-line;
  margin-bottom: 20px;
`;
