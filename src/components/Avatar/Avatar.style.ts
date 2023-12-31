import styled from '@emotion/styled';

interface AvatarContainerProps {
  size: number;
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImage = styled.img<AvatarImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

export const AvatarText = styled.div`
  font-size: 32px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #ff5858, #f857a6);
  ${({ theme }) => theme.style.flexCenter}
`;
