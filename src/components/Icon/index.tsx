import styled from '@emotion/styled';
import { GOOGLE_ICON_CLASSNAME } from '../../constants/Components';

const StyledIcon = styled.span<{ size: string; color: string }>`
  color: ${({ theme, color }) => theme[color]};
  font-size: ${({ size }) => size}px;
`;

interface IconProps {
  size: string;
  name: string;
  color: string;
}

const Icon = ({ name, size, color }: Partial<IconProps>) => {
  return (
    <StyledIcon
      className={GOOGLE_ICON_CLASSNAME}
      size={size}
      color={color}>
      {name}
    </StyledIcon>
  );
};

StyledIcon.defaultProps = {
  color: 'black'
};
export default Icon;
