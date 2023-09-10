import styled from '@emotion/styled';

interface DeemBackgroundProps {
  disabled: boolean;
}

interface ConfirmBackgroundProps {
  width: number;
  height: number;
}

interface IconWrapperProps {
  emojiSize: number;
}

interface ContentWrapperProps {
  contentFontSize: number;
}

export const DeemBackground = styled.div<DeemBackgroundProps>`
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

export const ConfirmBackground = styled.div<ConfirmBackgroundProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme['white']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 100%;
  height: 50%;
  font-size: ${({ emojiSize }) => emojiSize}rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 100%;
  height: 50%;
  text-align: center;
  font-weight: bold;
  font-size: ${({ contentFontSize }) => contentFontSize}rem;
  position: relative;
`;

export const NavButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  transform: translate(-50%, -50%);

  & > * {
    margin: 0 10px;
  }
`;
