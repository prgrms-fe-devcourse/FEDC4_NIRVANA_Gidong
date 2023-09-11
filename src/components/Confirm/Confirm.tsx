import { useState } from 'react';
import { Button } from '../Button';
import { Link } from '../Link';
import {
  StyledDeemBackground,
  StyledConfirmBackground,
  IconContainer,
  ContentContainer,
  NavButtonContainer
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
    <StyledDeemBackground disabled={disabled}>
      <StyledConfirmBackground
        width={width}
        height={height}>
        <IconContainer emojiSize={emojiSize}>{emoji}</IconContainer>
        <ContentContainer contentFontSize={contentFontSize}>
          {content}
          <NavButtonContainer>
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
          </NavButtonContainer>
        </ContentContainer>
      </StyledConfirmBackground>
    </StyledDeemBackground>
  );
};
export default Alert;
