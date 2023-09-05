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
      color={online ? 'greenVivid' : 'white500'}
      dot={true}
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
