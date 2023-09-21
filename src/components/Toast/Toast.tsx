interface ToastProps {
  width: number;
  height: number;
  content: string;
  type: 'WARNING' | 'ERROR' | 'ALERT' | 'SUCCESS';
}

const Toast = ({ width, height, content, type }: Partial<ToastProps>) => {};

export default Toast;
