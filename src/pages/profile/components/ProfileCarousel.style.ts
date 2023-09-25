import styled from '@emotion/styled';

export const ProfileCarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  overflow: hidden;
  user-select: none;
`;

export const ProfileCarouselItem = styled.div`
  flex: 1 0 100%;
`;

export const NonePostContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  width: 100%;
  height: 100%;
`;
