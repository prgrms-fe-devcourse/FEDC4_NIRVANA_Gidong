import { useState } from 'react';

import { Icon } from '@components/Icon';
import { StyledToast, IconContainer } from './Toast.style';

interface ToastProps {
  width?: number;
  height?: number;
  content: string;
  type: 'WARNING' | 'ERROR' | 'ALERT' | 'SUCCESS';
}

const Toast = ({ width, height, content, type }: ToastProps) => {
  const [toastShow, setToastShow] = useState(true);

  const clickCancelIcon = () => {
    setToastShow(false);
  };

  return (
    toastShow && (
      <StyledToast
        width={width}
        height={height}
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
