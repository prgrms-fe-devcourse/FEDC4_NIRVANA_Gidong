import '@emotion/react';
import { color } from '@styles/colors';
import { style } from '@styles/styles';

export type Color = typeof color;
type Style = typeof style;

declare module '@emotion/react' {
  export interface Theme extends color, style {
    color: {
      [key in keyof Color]: string;
    };
    style: {
      [key in keyof Style]: string;
    };
  }
}
