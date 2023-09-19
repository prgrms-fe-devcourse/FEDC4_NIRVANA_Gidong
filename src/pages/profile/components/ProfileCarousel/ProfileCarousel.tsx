import {
  ProfileCarouselContainer,
  ProfileCarouselItem
} from './ProfileCarousel.style';
import { useCarousel } from '../../hooks/useCarousel';
import { useRecoilState } from 'recoil';
import { selectedTabIndexState } from '../../states/selectedTabIndex';
import { FollowUsers } from '../FollowUsers';
import { TabItems } from '@pages/profile/utils/createTabItems';
import { PROFILE_TABS } from '@pages/profile/constants/profileTabs';
import { MeditationInfo } from '../MeditationInfo';
import { Follow } from '@/types';

interface ProfileCarouselProps {
  tabItems: TabItems;
  fullName: string;
}

const ProfileCarousel = ({ tabItems, fullName }: ProfileCarouselProps) => {
  const { MEDITATION, FOLLOWING, FOLLOWER, INFO } = PROFILE_TABS;

  const [selectedTabIndex, setSelectedTabIndex] = useRecoilState(
    selectedTabIndexState
  );
  const [carouselRef] = useCarousel(
    selectedTabIndex,
    setSelectedTabIndex,
    Object.keys(tabItems).length - 1
  );

  return (
    <ProfileCarouselContainer ref={carouselRef}>
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
