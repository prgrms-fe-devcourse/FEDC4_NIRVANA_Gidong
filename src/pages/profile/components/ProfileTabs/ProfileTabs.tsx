import { ProfileTabsContainer, ProfileTabsItem } from './ProfileTabs.style';
import { PROFILE_TABS } from '../../constants/profileTabs';
import { useRecoilState } from 'recoil';
import { selectedTabNameState } from '../../states/selectedTabName';

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

  const [selectedTabName, setSelectedTabName] =
    useRecoilState(selectedTabNameState);

  return (
    <ProfileTabsContainer>
      {profileTabs?.map((tab) => (
        <ProfileTabsItem
          key={tab.tabName}
          selected={tab.tabName === selectedTabName}
          onClick={() => setSelectedTabName(tab.tabName)}>
          <strong>{tab.title}</strong>
        </ProfileTabsItem>
      ))}
    </ProfileTabsContainer>
  );
};

export default ProfileTabs;
