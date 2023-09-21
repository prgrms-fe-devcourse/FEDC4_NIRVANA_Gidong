import '@emotion/react';
import { color } from '@styles/colors';
import { style } from '@styles/styles';

type color = typeof color;
type style = typeof style;

type c = keyof color;
type s = keyof style;

declare module '@emotion/react' {
  export interface Theme extends color, style {
    color: {
      [key in c]: string;
    };
    style: {
      [key in s]: string;
    };
  }
}
