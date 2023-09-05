import styled from '@emotion/styled';

interface SuperProps {
  position: 'top' | 'middle' | 'bottom';
  color: string;
  badgeSize?: number;
}

export const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Super = styled.sup<SuperProps>`
  position: absolute;
  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          top: 2px;
        `;
      case 'middle':
        return `
          top: 50%;
        `;
      case 'bottom':
        return `
          bottom: 2px;
        `;
      default:
        throw Error(
          `DotBadge를 사용할때는 position을 top,middle,bottom으로 지정해야 합니다. 현재 position:'${position}`
        );
    }
  }}
  right: 3px;
  background-color: ${({ theme, color }) => theme[color]};
  color: #fff;
  &.dot {
    padding: 0;
    width: ${(props) => (props.badgeSize ? `${props.badgeSize}px` : '6px')};
    height: ${(props) => (props.badgeSize ? `${props.badgeSize}px` : '6px')};
    border-radius: 50%;
  }
`;
