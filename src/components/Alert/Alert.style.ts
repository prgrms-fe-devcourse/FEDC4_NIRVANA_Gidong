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
  background-color: ${({ theme }) => theme['black600']};
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
`;

export const StyledAlertBackground = styled.div<AlertBackgroundProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme['white']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div<IconContainerProps>`
  width: 100%;
  height: 50%;
  font-size: ${({ emojiSize }) => emojiSize}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  width: 100%;
  height: 50%;
  text-align: center;
  font-weight: bold;
  font-size: ${({ contentFontSize }) => contentFontSize}px;
  position: relative;
`;

export const NavButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
