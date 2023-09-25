import { useRecoilState } from 'recoil';
import {
  NonePostContainer,
  ProfileCarouselContainer,
  ProfileCarouselItem
} from './ProfileCarousel.style';
import { useCarousel } from '../hooks/useCarousel';
import { selectedTabIndexState } from '../states/selectedTabIndex';
import { FollowUsers, MeditationInfo } from '@pages/profile/components';
import { TabItems } from '../utils/createTabItems';
import { PROFILE_TABS } from '../constants/profileTabs';
import { Follow } from '@/types/Follow';
import { PostPreview } from '@components/PostPreview';
import { Post } from '@/types/Post';
import { editPostData } from '@pages/posts/utils/editPostData';

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
            const editedData = editPostData(tabItem.data as Post[]);
            return editedData && editedData.length > 0 ? (
              <ProfileCarouselItem key={index}>
                {editedData.map((post, index) => {
                  const { content, likes, comments } = post;
                  return (
                    content && (
                      <PostPreview
                        key={index}
                        post={post}
                        totalLikes={likes.length}
                        totalComments={comments.length}
                        noneProfile={true}
                      />
                    )
                  );
                })}
              </ProfileCarouselItem>
            ) : (
              <ProfileCarouselItem key={index}>
                <NonePostContainer>
                  아직 명상을 진행하지 않았습니다
                </NonePostContainer>
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
