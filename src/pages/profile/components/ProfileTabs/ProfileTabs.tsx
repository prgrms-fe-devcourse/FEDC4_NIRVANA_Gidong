import {
  ProfileNavigationContainer,
  ProfileNavigationItem
} from './ProfileTabs.style';
import { useTabs } from '../../hooks/useTabs';
import { PROFILE_TABS } from '../../constants/profileTabs';

interface Tab {
  tabName: string;
  title: string;
}

interface ProfileNavigationProps {
  totalMeditation: number;
  totalFollowing: number;
  totalFollower: number;
}

const ProfileNavigation = ({
  totalMeditation,
  totalFollowing,
  totalFollower
}: ProfileNavigationProps) => {
  const profileTabs: Tab[] = [
    { tabName: PROFILE_TABS.MEDITATION, title: `${totalMeditation}번 명상` },
    { tabName: PROFILE_TABS.FOLLOWING, title: `${totalFollowing} 팔로잉` },
    { tabName: PROFILE_TABS.FOLLOWER, title: `${totalFollower} 팔로워` },
    { tabName: PROFILE_TABS.INFO, title: '명상정보' }
  ];

  const [selectedTabName, handleTabClick] = useTabs(profileTabs);
  return (
    <ProfileNavigationContainer>
      {profileTabs?.map((tab) => (
        <ProfileNavigationItem
          key={tab.tabName}
          selected={tab.tabName === selectedTabName}
          onClick={() => handleTabClick(tab.tabName)}>
          <strong>{tab.title}</strong>
        </ProfileNavigationItem>
      ))}
    </ProfileNavigationContainer>
  );
};

export default ProfileNavigation;
