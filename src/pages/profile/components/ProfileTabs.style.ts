import styled from '@emotion/styled';

interface ProfileTabsProps {
  selectedTabIndex: number;
}

export const ProfileTabsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  height: 40px;
`;

export const ProfileTabItemBottomBarContainer = styled.div<ProfileTabsProps>`
  height: 3px;
  width: 25%;
  padding: 0 10px;
  transition: all 0.2s ease-in-out;
  transform: ${({ selectedTabIndex }) =>
    `translateX(${selectedTabIndex * 100}%)`};
`;

export const ProfileTabItemBottomBar = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.purpleVivid};
`;
