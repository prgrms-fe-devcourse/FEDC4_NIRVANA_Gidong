import { useRecoilState } from 'recoil';
import {
  ProfileCarouselContainer,
  ProfileCarouselItem
} from './ProfileCarousel.style';
import { useCarousel } from '../hooks/useCarousel';
import { selectedTabIndexState } from '../states/selectedTabIndex';
import { FollowUsers, MeditationInfo } from '@pages/profile/components';
import { TabItems } from '../utils/createTabItems';
import { PROFILE_TABS } from '../constants/profileTabs';
import { Follow } from '@/types/Follow';
import { useEffect } from 'react';

interface ProfileCarouselProps {
  tabItems: TabItems;
  fullName: string;
}

const ProfileCarousel = ({ tabItems, fullName }: ProfileCarouselProps) => {
  const { MEDITATION, FOLLOWING, FOLLOWER, INFO } = PROFILE_TABS;

  const [selectedTabIndex, setSelectedTabIndex] = useRecoilState(
    selectedTabIndexState
  );

  useEffect(() => {
    setSelectedTabIndex(0);
  }, [setSelectedTabIndex]);

  const [carouselRef] = useCarousel(
    selectedTabIndex,
    setSelectedTabIndex,
    Object.keys(tabItems).length - 1
  );

  return (
    <ProfileCarouselContainer
      selectedTabIndex={selectedTabIndex}
      ref={carouselRef}>
      {Object.entries(tabItems).map(([label, tabItem], index) => {
        switch (label) {
          case MEDITATION:
            return (
              <ProfileCarouselItem key={index}>
                {tabItem.value}
              </ProfileCarouselItem>
            );
          case FOLLOWING:
            return (
              <ProfileCarouselItem key={index}>
                <FollowUsers
                  following={true}
                  data={tabItem.data as Follow[]}
                />
              </ProfileCarouselItem>
            );
          case FOLLOWER:
            return (
              <ProfileCarouselItem key={index}>
                <FollowUsers
                  following={false}
                  data={tabItem.data as Follow[]}
                />
              </ProfileCarouselItem>
            );
          case INFO:
            return (
              <ProfileCarouselItem key={index}>
                <MeditationInfo
                  data={tabItem.data as number[]}
                  fullName={fullName}
                />
                {tabItem.value}
              </ProfileCarouselItem>
            );
          default:
            return (
              <ProfileCarouselItem key={index}>
                {tabItem.value}
              </ProfileCarouselItem>
            );
        }
      })}
    </ProfileCarouselContainer>
  );
};

export default ProfileCarousel;
