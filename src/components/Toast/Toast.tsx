import { StyledToast } from './Toast.style';

interface ToastProps {
  width: number;
  height: number;
  content: string;
  type: 'WARNING' | 'ERROR' | 'ALERT' | 'SUCCESS';
}

const Toast = ({ width, height, content, type }: Partial<ToastProps>) => {
  return (
    <StyledToast
      width={width}
      height={height}
      toastType={type}>
      {content}
    </StyledToast>
  );
};

export default Toast;
