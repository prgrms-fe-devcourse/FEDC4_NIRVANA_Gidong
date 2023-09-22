import styled from '@emotion/styled';

interface DeemBackgroundProps {
  disabled: boolean;
}

interface AlertBackgroundProps {
  width: number;
  height: number;
}

interface IconContainerProps {
  emojiSize: number;
}

interface ContentContainerProps {
  contentFontSize: number;
}

export const StyledDeemBackground = styled.div<DeemBackgroundProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black600};
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

export const StyledAlertBackground = styled.div<AlertBackgroundProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  flex-direction: column;
  ${({ theme }) => theme.style.flexAlignCenter}
`;

export const IconContainer = styled.div<IconContainerProps>`
  ${({ theme }) => theme.style.flexCenter}
  width: 100%;
  height: 50%;
  font-size: ${({ emojiSize }) => emojiSize}px;
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  width: 80%;
  height: 50%;
  white-space: pre-line;
  text-align: center;
  font-weight: bold;
  font-size: ${({ contentFontSize }) => contentFontSize}px;
  position: relative;
`;

export const NavButtonContainer = styled.div`
  ${({ theme }) => theme.style.absoluteCenter}
`;
