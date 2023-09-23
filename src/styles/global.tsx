import { Global, css } from '@emotion/react';

const style = css`
  * {
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
  }
  #root {
    font-family: 'Pretendard Variable', sans-serif;
    width: 100%;
    height: 100%;
    max-width: 768px;
  }
  #modal-root {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 768px;
  }
`;
const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
