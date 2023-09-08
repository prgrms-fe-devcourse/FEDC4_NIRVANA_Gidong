import { ProfileTabsContainer, ProfileTabsItem } from './ProfileTabs.style';
import { useTabs } from '../../hooks/useTabs';
import { PROFILE_TABS } from '../../constants/profileTabs';

interface Tab {
  tabName: string;
  title: string;
}

interface ProfileTabsProps {
  totalMeditation: number;
  totalFollowing: number;
  totalFollower: number;
}

const ProfileTabs = ({
  totalMeditation,
  totalFollowing,
  totalFollower
}: ProfileTabsProps) => {
  const profileTabs: Tab[] = [
    { tabName: PROFILE_TABS.MEDITATION, title: `${totalMeditation}번 명상` },
    { tabName: PROFILE_TABS.FOLLOWING, title: `${totalFollowing} 팔로잉` },
    { tabName: PROFILE_TABS.FOLLOWER, title: `${totalFollower} 팔로워` },
    { tabName: PROFILE_TABS.INFO, title: '명상정보' }
  ];

  const [selectedTabName, handleTabClick] = useTabs(profileTabs);
  return (
    <ProfileTabsContainer>
      {profileTabs?.map((tab) => (
        <ProfileTabsItem
          key={tab.tabName}
          selected={tab.tabName === selectedTabName}
          onClick={() => handleTabClick(tab.tabName)}>
          <strong>{tab.title}</strong>
        </ProfileTabsItem>
      ))}
    </ProfileTabsContainer>
  );
};

export default ProfileTabs;
