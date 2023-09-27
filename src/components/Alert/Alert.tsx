import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ContentContainer,
  IconContainer,
  NavButtonContainer,
  StyledAlertBackground,
  StyledDeemBackground
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
  handleClickButton?: () => void;
}

const Alert = ({
  width = 330,
  height = 390,
  emoji,
  emojiSize = 80,
  content,
  contentFontSize = 16,
  buttonLabel,
  nextPageLink,
  handleClickButton
}: Partial<AlertProps>) => {
  const [disabled, setDisabled] = useState(false);
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    domReady &&
    createPortal(
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
                  handleClick={handleClickButton}
                />
              )}
            </NavButtonContainer>
          </ContentContainer>
        </StyledAlertBackground>
      </StyledDeemBackground>,
      document.getElementById('root-modal')
    )
  );
};
export default Alert;
