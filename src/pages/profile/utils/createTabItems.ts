import { User, Follow, Post } from '@/types';
import { PROFILE_TABS } from '../constants/profileTabs';

export interface TabItem {
  label: string;
  value: string | number;
  data: number[] | Post[] | Follow[];
}

const createTabItems = (tabData: User, isLoading: boolean): TabItem[] => {
  const tabItems = [
    {
      label: PROFILE_TABS.MEDITATION,
      value: isLoading ? 0 : tabData.posts.length,
      data: isLoading ? [] : tabData.posts
    },
    {
      label: PROFILE_TABS.FOLLOWING,
      value: isLoading ? 0 : tabData.following.length,
      data: isLoading ? [] : tabData.following
    },
    {
      label: PROFILE_TABS.FOLLOWER,
      value: isLoading ? 0 : tabData.followers.length,
      data: isLoading ? [] : tabData.followers
    },

    {
      label: PROFILE_TABS.INFO,
      value: '',
      data: isLoading ? [] : [tabData.posts.length]
    }
  ];

  return tabItems;
};

export default createTabItems;
