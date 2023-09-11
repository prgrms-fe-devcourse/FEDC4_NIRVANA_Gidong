import { StyledIcon } from './Icon.style';
import { GOOGLE_ICON_CLASSNAME } from '../../constants/Components';

interface IconProps {
  size: number;
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
