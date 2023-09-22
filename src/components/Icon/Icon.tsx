import { StyledIcon } from './Icon.style';
import { GOOGLE_ICON_CLASSNAME } from '../../constants/Components';

interface IconProps {
  size: number;
  name: string;
  color: string;
  fill?: boolean;
}

const Icon = ({ name, size, color, fill }: Partial<IconProps>) => {
  return (
    <StyledIcon
      className={GOOGLE_ICON_CLASSNAME}
      size={size}
      color={color}
      fill={fill ? `'FILL' 1` : `'FILL' 0`}>
      {name}
    </StyledIcon>
  );
};

StyledIcon.defaultProps = {
  color: 'black'
};
export default Icon;
