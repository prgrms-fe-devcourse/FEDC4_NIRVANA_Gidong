import { Global, css } from '@emotion/react';

const style = css`
  * {
    box-sizing: border-box;
  }
`;
const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
