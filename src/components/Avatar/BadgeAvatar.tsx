import Avatar from './Avatar';
import { DotBadge } from '../Badge';

interface BadgeAvatarProps {
  alt: string;
  src: string;
  size: number;
  online: boolean;
}

const BadgeAvatar = ({ alt, src, size, online }: BadgeAvatarProps) => {
  return (
    <DotBadge
      dot={true}
      color={online ? '#2ed573' : '#bebdbd'}
      position='bottom'
      badgeSize={10}>
      <Avatar
        alt={alt}
        src={src}
        size={size}></Avatar>
    </DotBadge>
  );
};

export default BadgeAvatar;
