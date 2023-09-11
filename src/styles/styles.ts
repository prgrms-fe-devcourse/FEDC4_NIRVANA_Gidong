export interface Style {
  [key: string]: string;
}

export const style: Style = {
  flexCenter: `
  display: flex;
  justify-contents: center;
  align-items : center;
  `,
  flexAlignCenter: `
  display : flex;
  align-items : center;
  `,
  absoluteCenter: `
  position : absolute;
  left : 50%;
  top : 50%;
  transform : translate(-50%, -50%);
  `
};
