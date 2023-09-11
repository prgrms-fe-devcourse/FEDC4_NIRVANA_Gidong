import { useState } from 'react';
import Button from '../Button';
import Link from '../Link';
import {
  DeemBackground,
  ConfirmBackground,
  IconWrapper,
  ContentWrapper,
  NavButtonWrapper
} from './Confirm.style';

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
  emojiSize = 80,
  content,
  contentFontSize = 16,
  nextPageLink
}: Partial<AlertProps>) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <DeemBackground disabled={disabled}>
      <ConfirmBackground
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
    </DeemBackground>
  );
};
export default Alert;
