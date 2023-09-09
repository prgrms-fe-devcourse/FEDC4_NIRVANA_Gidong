import { ProfileTabsContainer } from './ProfileTabs.style';

interface ProfileTabsProps {
  children: React.ReactNode;
}

const ProfileTabs = ({ children }: ProfileTabsProps) => {
  // const profileTabs: Tab[] = [
  //   { tabName: PROFILE_TABS.MEDITATION, title: `${totalMeditation}번 명상` },
  //   { tabName: PROFILE_TABS.FOLLOWING, title: `${totalFollowing} 팔로잉` },
  //   { tabName: PROFILE_TABS.FOLLOWER, title: `${totalFollower} 팔로워` },
  //   { tabName: PROFILE_TABS.INFO, title: '명상정보' }
  // ];

  return <ProfileTabsContainer>{children}</ProfileTabsContainer>;
};

export default ProfileTabs;
