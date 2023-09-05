import { AvatarContainer, AvatarImage } from './Avatar.style';
interface AvatarProps {
  alt: string;
  src: string;
  size: number;
}

const Avatar = ({ alt, src, size }: AvatarProps) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage
        src={src}
        alt={alt}
      />
    </AvatarContainer>
  );
};

export default Avatar;
