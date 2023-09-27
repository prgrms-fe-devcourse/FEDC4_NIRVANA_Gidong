import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import type { EditedPost, Post, User, Follow } from '@/types';

import {
  NoneContentContainer,
  ProfileCarouselContainer,
  ProfileCarouselItem
} from './ProfileCarousel.style';
import { useCarousel } from '../hooks/useCarousel';
import { selectedTabIndexState } from '../states/selectedTabIndex';
import { FollowUsers, MeditationInfo } from '@pages/profile/components';
import { TabItems } from '../utils/createTabItems';
import { PROFILE_TABS } from '../constants/profileTabs';
import { PostPreview } from '@components/PostPreview';
import { editPostData } from '@pages/posts/utils/editPostData';

interface ProfileCarouselProps {
  tabItems: TabItems;
  fullName: string;
  myProfileData?: User;
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
        const { data, value } = tabItem;
        let editedData: EditedPost[] = [];
        switch (label) {
          case MEDITATION:
            editedData = editPostData(tabItem.data as Post[]);

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
                <NoneContentContainer>
                  아직 명상을 진행하지 않았습니다
                </NoneContentContainer>
              </ProfileCarouselItem>
            );
          case FOLLOWER:
            return data && data.length > 0 ? (
              <ProfileCarouselItem key={index}>
                <FollowUsers
                  followerTab={true}
                  data={data as Follow[]}
                />
              </ProfileCarouselItem>
            ) : (
              <ProfileCarouselItem key={index}>
                <NoneContentContainer>
                  아직 팔로워가 없습니다.
                </NoneContentContainer>
              </ProfileCarouselItem>
            );
          case FOLLOWING:
            return data && data.length > 0 ? (
              <ProfileCarouselItem key={index}>
                <FollowUsers
                  followerTab={false}
                  data={data as Follow[]}
                />
              </ProfileCarouselItem>
            ) : (
              <ProfileCarouselItem key={index}>
                <NoneContentContainer>
                  아직 팔로우한 유저가 없습니다.
                </NoneContentContainer>
              </ProfileCarouselItem>
            );
          case INFO:
            return (
              <ProfileCarouselItem key={index}>
                <MeditationInfo
                  data={data as number[]}
                  fullName={fullName}
                />
                {value}
              </ProfileCarouselItem>
            );
          default:
            return (
              <ProfileCarouselItem key={index}>{value}</ProfileCarouselItem>
            );
        }
      })}
    </ProfileCarouselContainer>
  );
};

export default ProfileCarousel;
