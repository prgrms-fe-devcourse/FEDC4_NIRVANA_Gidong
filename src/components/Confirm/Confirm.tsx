import React, { useEffect, useState } from 'react';
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
  CancelButton: React.ReactNode;
  ConfirmButton: React.ReactNode;
}

const Confirm = ({
  emoji,
  content,
  contentFontSize = 16,
  nextPageLink,
  CancelButton,
  ConfirmButton
}: Partial<ConfirmProps>) => {
  const [disabled, setDisabled] = useState(false);
  const [domReady, setDomReady] = useState(false);

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
                {CancelButton}
              </CancelButtonDefaultEvent>
              <Link pageLink={nextPageLink}>{ConfirmButton}</Link>
            </NavButtonContainer>
          </ContentContainer>
        </StyledConfirmBackground>
      </StyledDeemBackground>,
      document.getElementById('root-modal')
    )
  );
};
export default Confirm;
