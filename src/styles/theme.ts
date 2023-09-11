import { Color, color } from './colors';
import { Style, style } from './styles';

interface Theme {
  color: Color;
  style: Style;
}

const theme: Theme = {
  color,
  style
};

export default theme;
