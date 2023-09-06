import styled from '@emotion/styled';
import Button from '../Button';
import Link from '../Link';
import { useState } from 'react';

const ConfirmBackground = styled.div<{
  disabled: boolean;
  width: number;
  height: number;
}>`
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme['white']};
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div<{ emojiSize: number }>`
  width: 100%;
  height: 50%;
  font-size: ${({ emojiSize }) => emojiSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div<{ contentFontSize: number }>`
  width: 100%;
  height: 50%;
  text-align: center;
  font-weight: bold;
  font-size: ${({ contentFontSize }) => contentFontSize}px;
  position: relative;
`;

const NavButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  transform: translate(-50%, -50%);

  & > * {
    margin: 0 10px;
  }
`;

interface AlertProps {
  width: number;
  height: number;
  emoji: string;
  emojiSize: number;
  content: string;
  contentFontSize: number;
  nextPageLink: string;
}

const Alert = ({
  width = 330,
  height = 390,
  emoji,
  emojiSize = 70,
  content,
  contentFontSize = 16,
  nextPageLink
}: Partial<AlertProps>) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <ConfirmBackground
      disabled={disabled}
      width={width}
      height={height}>
      <IconWrapper emojiSize={emojiSize}>{emoji}</IconWrapper>
      <ContentWrapper contentFontSize={contentFontSize}>
        {content}
        <NavButtonWrapper>
          <Button
            handleClick={() => setDisabled(true)}
            width={120}
            height={50}
            dark={false}
            bold={false}
            label={'취소'}></Button>
          <Link pageLink={nextPageLink}>
            <Button
              width={120}
              height={50}
              dark={true}
              bold={true}
              label={'확인'}
            />
          </Link>
        </NavButtonWrapper>
      </ContentWrapper>
    </ConfirmBackground>
  );
};
export default Alert;
