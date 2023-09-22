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
  border-left: 10px solid ${textColor};`;
};

const StyledToast = styled.div<StyledToastProps>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  max-width: 768px;
  min-height: ${({ height }) => (height ? `${height}px` : `70px`)};
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: space-between;
  transition: 3s all ease-out;
  animation: hide 3s ease-out forwards;
  opacity: 1;
  padding: 0px 30px;
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

  @keyframes hide {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  ${({ theme }) => theme.style.flexCenter};
`;

export { StyledToast, IconContainer };
