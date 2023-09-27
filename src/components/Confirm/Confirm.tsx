import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '../Link';
import {
  CancelButtonDefaultEvent,
  ContentContainer,
  IconContainer,
  NavButtonContainer,
  StyledConfirmBackground,
  StyledDeemBackground
} from './Confirm.style';
import { prevPostingInfo } from '@pages/meditation/components/PrevPostingConfirm';

interface ConfirmProps {
  emoji: string;
  content: string;
  contentFontSize: number;
  nextPageLink: string;
  CancelButton: React.ReactNode | (() => JSX.Element);
  ConfirmButton: React.ReactNode | (() => JSX.Element);
  linkState?: { [key: string]: string | number | boolean | prevPostingInfo };
}

const Confirm = ({
  emoji,
  content,
  contentFontSize = 16,
  nextPageLink,
  linkState,
  CancelButton,
  ConfirmButton
}: Partial<ConfirmProps>) => {
  const [disabled, setDisabled] = useState(false);
  const [domReady, setDomReady] = useState(false);

  const FormedCancelButton =
    typeof CancelButton === 'function' ? CancelButton() : CancelButton;
  const FormedConfirmButton =
    typeof ConfirmButton === 'function' ? ConfirmButton() : ConfirmButton;

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    domReady &&
    createPortal(
      <StyledDeemBackground disabled={disabled}>
        <StyledConfirmBackground
          width={330}
          height={390}>
          <IconContainer emojiSize={80}>{emoji}</IconContainer>
          <ContentContainer contentFontSize={contentFontSize}>
            {content}
            <NavButtonContainer>
              <CancelButtonDefaultEvent onClick={() => setDisabled(true)}>
                {FormedCancelButton}
              </CancelButtonDefaultEvent>
              {nextPageLink ? (
                <Link
                  state={linkState}
                  pageLink={nextPageLink}>
                  {FormedConfirmButton}
                </Link>
              ) : (
                FormedConfirmButton
              )}
            </NavButtonContainer>
          </ContentContainer>
        </StyledConfirmBackground>
      </StyledDeemBackground>,
      document.getElementById('root-modal')
    )
  );
};
export default Confirm;
