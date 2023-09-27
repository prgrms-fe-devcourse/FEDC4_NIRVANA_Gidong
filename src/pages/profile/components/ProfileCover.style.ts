import styled from '@emotion/styled';

interface ProfileCoverImageProps {
  src?: string;
}

export const ProfileCoverImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: fit-content;
  top: 0;
  display: ${({ src }) => (src ? 'block' : 'none')};
`;

export const ProfileCoverImageContainer = styled.div<ProfileCoverImageProps>`
  background-image: ${({ theme }) => theme.color.linearGradientPurple};
  ${({ theme }) => theme.style.flexCenter};
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
  > button {
    position: absolute;
    top: 10px;
    right: 15px;
  }

  @media (min-width: 600px) {
    height: 150px;
  }
`;
