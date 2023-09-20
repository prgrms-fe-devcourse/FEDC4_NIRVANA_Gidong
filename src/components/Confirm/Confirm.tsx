import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '../Link';
import {
  StyledDeemBackground,
  StyledConfirmBackground,
  IconContainer,
  ContentContainer,
  NavButtonContainer,
  CancelButtonDefaultEvent
} from './Confirm.style';

interface ConfirmProps {
  emoji: string;
  content: string;
  contentFontSize: number;
  nextPageLink: string;
  CancelButton: React.ReactNode | (() => JSX.Element);
  ConfirmButton: React.ReactNode | (() => JSX.Element);
  linkState: { [key: string]: any };
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
  const FormedCancelButton =
    typeof CancelButton === 'function' ? CancelButton() : CancelButton;
  const FormedConfirmlButton =
    typeof ConfirmButton === 'function' ? ConfirmButton() : ConfirmButton;
  return (
  return createPortal(
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
            <Link
              pageLink={nextPageLink}
              state={{ linkState }}>
              {FormedConfirmlButton}
            </Link>
          </NavButtonContainer>
        </ContentContainer>
      </StyledConfirmBackground>
    </StyledDeemBackground>,
    document.getElementById('root-modal')
  );
};
export default Confirm;
