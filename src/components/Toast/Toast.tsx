import { useEffect, useState } from 'react';

import { Icon } from '@components/Icon';
import { IconContainer, StyledToast } from './Toast.style';

interface ToastProps {
  width?: number;
  height?: number;
  top?: number;
  content: string;
  type: 'WARNING' | 'ERROR' | 'CONFIRM' | 'SUCCESS';
}

const Toast = ({ width, height, top, content, type }: ToastProps) => {
  const [toastShow, setToastShow] = useState(true);

  const clickCancelIcon = () => {
    setToastShow(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setToastShow(false);
    }, 5000);
  }, []);

  return (
    toastShow && (
      <StyledToast
        width={width}
        height={height}
        top={top}
        toastType={type}>
        {content}
        <IconContainer onClick={clickCancelIcon}>
          <Icon
            name='close'
            size={14}
          />
        </IconContainer>
      </StyledToast>
    )
  );
};

export default Toast;
