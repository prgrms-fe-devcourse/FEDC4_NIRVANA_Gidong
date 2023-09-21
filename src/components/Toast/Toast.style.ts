import styled from '@emotion/styled';

interface ToastContainerProps {
  width?: number;
  height?: number;
  type: string;
}

const ErrorContainer = `
  background-color: ${({ theme }) => theme.color.redPastel};
  color: ${({ theme }) => theme.color.redVivid};
  border-left: 10px solid ${({ theme }) => theme.color.redVivid};
`;
const WarningContainer = `
  background-color: ${({ theme }) => theme.color.orangePastel};
  color: ${({ theme }) => theme.color.orange};
  border-left: 10px solid ${({ theme }) => theme.color.orange};
`;

const ConfirmContainer = `
  background-color: ${({ theme }) => theme.color.bluePastel};
  color: ${({ theme }) => theme.color.blue};
  border-left: 10px solid ${({ theme }) => theme.color.blue};
`;

const SuccessContainer = `
  background-color: ${({ theme }) => theme.color.greenDarkPastel};
  color: ${({ theme }) => theme.color.greenDark};
  border-left: 10px solid ${({ theme }) => theme.color.greenDark};
`;

const ToastContainer = styled.div<ToastContainerProps>`
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  height: ${({ height }) => (height ? `${height}px` : `50px`)};
  padding-left: 30px;
  {({ theme }) => theme.style.AlignCenter};
  ${({ type }) => (type === 'ERROR' ? ErrorContainer : '')}
  ${({ type }) => (type === 'WARNING' ? WarningContainer : '')}
  ${({ type }) => (type === 'SUCCESS' ? SuccessContainer : '')}
  ${({ type }) => (type === 'CONFIRM' ? ConfirmContainer : '')}
`;

export { ToastContainer };
