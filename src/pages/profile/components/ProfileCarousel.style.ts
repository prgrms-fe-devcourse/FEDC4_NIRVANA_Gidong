import styled from '@emotion/styled';

interface ProfileCarouselContainerProps {
  selectedTabIndex: number;
}

export const ProfileCarouselContainer = styled.div<ProfileCarouselContainerProps>`
  width: 100%;
  display: flex;
  flex: 1;
  overflow: hidden;
  user-select: none;
  scroll-behavior: smooth;
`;

export const ProfileCarouselItem = styled.div`
  flex: 1 0 100%;
`;

export const NonePostContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  width: 100%;
  height: 100%;
`;
