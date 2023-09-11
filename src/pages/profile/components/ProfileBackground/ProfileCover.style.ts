import styled from '@emotion/styled';

export const ProfileCoverImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: fit-content;
  min-height: 100px;
  top: 0;
  background-image: ${({ theme, src }) =>
    src ?? theme.color.linearGradientPurple};
`;
