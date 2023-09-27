import { AvatarContainer, AvatarImage, AvatarText } from './Avatar.style';

interface AvatarProps {
  alt: string;
  src: string;
  size: number;
  children?: React.ReactNode;
}

const Avatar = ({ alt, src, size, children }: AvatarProps) => {
  return (
    <AvatarContainer size={size}>
      {src ? (
        <AvatarImage
          src={src}
          alt={alt}
        />
      ) : (
        <AvatarText>{alt?.charAt(0).toUpperCase()}</AvatarText>
      )}
      {children}
    </AvatarContainer>
  );
};

export default Avatar;
