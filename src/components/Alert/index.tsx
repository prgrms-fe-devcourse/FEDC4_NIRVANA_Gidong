import { useState } from 'react';
import styled from '@emotion/styled';
import Button from '../Button';
import Link from '../Link';

const DeemBackground = styled.div<{ disabled: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme['black600']};
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

const AlertBackground = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme['white']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div<{ emojiSize: number }>`
  width: 100%;
  height: 50%;
  font-size: ${({ emojiSize }) => emojiSize}rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div<{ contentFontSize: number }>`
  width: 100%;
  height: 50%;
  text-align: center;
  font-weight: bold;
  font-size: ${({ contentFontSize }) => contentFontSize}rem;
  position: relative;
`;

const NavButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

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
