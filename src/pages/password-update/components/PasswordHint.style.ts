import styled from '@emotion/styled';

const PasswordHintContainer = styled.div<{
  fontSize: number;
  color: string;
}>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
  color: ${({ color, theme }) => (color ? color : theme.color.greyLight)};
  white-space: pre-line;
  margin-bottom: 20px;
`;

export default PasswordHintContainer;
