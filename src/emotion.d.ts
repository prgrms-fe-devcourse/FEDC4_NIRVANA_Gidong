import '@emotion/react';
import { IColor } from './styles/colors';

declare module '@emotion/react' {
  export interface Theme extends IColor {}
}
