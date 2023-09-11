import { useState } from 'react';
import {
  StyledDeemBackground,
  StyledAlertBackground,
  IconContainer,
  ContentContainer,
  NavButtonContainer
} from './Alert.style';
import { Button } from '../Button';
import { Link } from '../Link';

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
  emojiSize = 80,
  content,
  contentFontSize = 16,
  buttonLabel,
  nextPageLink
}: Partial<AlertProps>) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <StyledDeemBackground disabled={disabled}>
      <StyledAlertBackground
        width={width}
        height={height}>
        <IconContainer emojiSize={emojiSize}>{emoji}</IconContainer>
        <ContentContainer contentFontSize={contentFontSize}>
          {content}
          <NavButtonContainer onClick={() => setDisabled(true)}>
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
          </NavButtonContainer>
        </ContentContainer>
      </StyledAlertBackground>
    </StyledDeemBackground>
  );
};
export default Alert;
