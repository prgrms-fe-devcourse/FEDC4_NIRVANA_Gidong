import '@emotion/react';
import { color } from '@styles/colors';
import { style } from '@styles/styles';

type color = typeof color;
type style = typeof style;

declare module '@emotion/react' {
  export interface Theme extends color, style {
    color: {
      [key in keyof color]: string;
    };
    style: {
      [key in keyof style]: string;
    };
  }
}
