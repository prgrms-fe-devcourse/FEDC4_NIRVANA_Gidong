import { useState } from 'react';
import {
  DeemBackground,
  AlertBackground,
  IconWrapper,
  ContentWrapper,
  NavButtonWrapper
} from './Alert.style';
import Button from '../Button';
import Link from '../Link';

interface AlertProps {
  width: number;
  height: number;
  emoji: string;
  emojiSize: number;
  content: string;
  contentFontSize: number;
  buttonLabel: string;
  nextPageLink: string;
}

const Alert = ({
  width = 330,
  height = 390,
  emoji,
  emojiSize = 4.5,
  content,
  contentFontSize = 1,
  buttonLabel,
  nextPageLink
}: Partial<AlertProps>) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <DeemBackground disabled={disabled}>
      <AlertBackground
        width={width}
        height={height}>
        <IconWrapper emojiSize={emojiSize}>{emoji}</IconWrapper>
        <ContentWrapper contentFontSize={contentFontSize}>
          {content}
          <NavButtonWrapper onClick={() => setDisabled(true)}>
            {nextPageLink ? (
              <Link pageLink={nextPageLink}>
                <Button
                  width={300}
                  height={50}
                  dark={true}
                  bold={true}
                  label={buttonLabel}
                />
              </Link>
            ) : (
              <Button
                width={300}
                height={50}
                dark={true}
                bold={true}
                label={buttonLabel}
              />
            )}
          </NavButtonWrapper>
        </ContentWrapper>
      </AlertBackground>
    </DeemBackground>
  );
};
export default Alert;
