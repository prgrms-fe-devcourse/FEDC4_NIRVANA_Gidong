import { BadgeContainer, Super } from './DotBadge.style';
import { color } from '@styles/colors';

interface BadgeProps {
  children: React.ReactNode;
  dot: boolean;
  color: keyof typeof color;
  position: 'top' | 'middle' | 'bottom';
  badgeSize?: number;
}

const DotBadge = ({
  children,
  dot,
  color,
  position,
  badgeSize
}: BadgeProps) => {
  return (
    <BadgeContainer>
      {children}
      {dot && (
        <Super
          className='dot'
          color={color}
          position={position}
          badgeSize={badgeSize}
        />
      )}
    </BadgeContainer>
  );
};

export default DotBadge;
