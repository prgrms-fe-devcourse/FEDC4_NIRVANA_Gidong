import { User } from '@/types';
import { PROFILE_TABS } from '../constants/profileTabs';

export const useTabItem = (
  tabData: Pick<User, 'followers' | 'following' | 'posts'>,
  isLoading: boolean
) => {
  const tabItems = [
    {
      label: PROFILE_TABS.MEDITATION,
      value: isLoading ? 0 : tabData.posts.length
    },
    {
      label: PROFILE_TABS.FOLLOWING,
      value: isLoading ? 0 : tabData.following.length
    },
    {
      label: PROFILE_TABS.FOLLOWER,
      value: isLoading ? 0 : tabData.followers.length
    },
    {
      label: PROFILE_TABS.INFO,
      value: ''
    }
  ];

  return { tabItems };
};
