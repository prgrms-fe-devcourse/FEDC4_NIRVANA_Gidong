import { User, Follow, Post } from '@/types';
import { PROFILE_TABS } from '../constants/profileTabs';

const { MEDITATION, FOLLOWING, FOLLOWER, INFO } = PROFILE_TABS;

export interface TabItem<T> {
  value: string | number;
  data: T;
}

export interface TabItems {
  [key: string]: TabItem<Follow[] | Post[] | number[]>;
}

const createTabItems = (tabData: User, isLoading: boolean): TabItems => {
  const tabItems = {
    [MEDITATION]: {
      value: isLoading ? 0 : tabData.posts.length,
      data: isLoading ? [] : tabData.posts
    },
    [FOLLOWING]: {
      value: isLoading ? 0 : tabData.following.length,
      data: isLoading ? [] : tabData.following
    },
    [FOLLOWER]: {
      value: isLoading ? 0 : tabData.followers.length,
      data: isLoading ? [] : tabData.followers
    },
    [INFO]: {
      value: '',
      data: isLoading ? [] : [tabData.posts.length, tabData.posts.length]
    }
  };

  return tabItems;
};

export default createTabItems;
