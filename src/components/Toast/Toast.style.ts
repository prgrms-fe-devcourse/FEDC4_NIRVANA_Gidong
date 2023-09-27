import styled from '@emotion/styled';

interface StyledToastProps {
  width?: number;
  height?: number;
  toastType: string;
}

const ChildContainer = (backgroundColor: string, textColor: string) => {
  return `
  background-color: ${backgroundColor};
  color: ${textColor};
  border-left: 10px solid ${textColor};
  `;
};

const StyledToast = styled.div<StyledToastProps>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  max-width: 768px;
  min-height: ${({ height }) => (height ? `${height}px` : `70px`)};
  position: absolute;
  z-index: 999;
  top: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  transition: 1s all ease-out;
  ${({ theme }) => theme.style.flexAlignCenter};
  ${({ toastType, theme }) =>
    toastType === 'ERROR'
      ? ChildContainer(theme.color.redPastel, theme.color.redVivid)
      : ''}
  ${({ toastType, theme }) =>
    toastType === 'WARNING'
      ? ChildContainer(theme.color.orangePastel, theme.color.orange)
      : ''}
  ${({ toastType, theme }) =>
    toastType === 'SUCCESS'
      ? ChildContainer(theme.color.greenDarkPastel, theme.color.greenDark)
      : ''}
  ${({ toastType, theme }) =>
    toastType === 'CONFIRM'
      ? ChildContainer(theme.color.bluePastel, theme.color.blue)
      : ''}


  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: fade-in-out 5s ease-out forwards;
`;

const IconContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  ${({ theme }) => theme.style.flexCenter};
`;

export { StyledToast, IconContainer };
