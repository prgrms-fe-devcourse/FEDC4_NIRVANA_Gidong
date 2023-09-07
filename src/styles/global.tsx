import { Global, css } from '@emotion/react';

const style = css`
  * {
    box-sizing: border-box;
  }
  #root {
    font-family: 'Pretendard Variable', sans-serif;
    width: 100vw;
    height: 100vh;
  }
`;
const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
