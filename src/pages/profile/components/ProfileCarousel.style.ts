import styled from '@emotion/styled';

interface ProfileCarouselContainerProps {
  selectedTabIndex: number;
}

export const ProfileCarouselContainer = styled.div<ProfileCarouselContainerProps>`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  user-select: none;
  scroll-behavior: smooth;
  > div:first-of-type {
    > div {
      padding: 0;
    }
    > div:last-of-type {
      border-bottom: none;
    }
  }
`;

export const ProfileCarouselItem = styled.div`
  flex: 1 0 100%;
  overflow: auto;
`;

export const NoneContentContainer = styled.div`
  ${({ theme }) => theme.style.flexCenter};
  width: 100%;
  height: 100%;
`;
