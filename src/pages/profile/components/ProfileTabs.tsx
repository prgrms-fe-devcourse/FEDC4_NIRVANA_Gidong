import { TabItems } from '../utils/createTabItems';
import {
  ProfileTabItemBottomBar,
  ProfileTabItemBottomBarContainer,
  ProfileTabsContainer
} from './ProfileTabs.style';
import { ProfileTabItem } from '@pages/profile/components';
import { useRecoilState } from 'recoil';
import { selectedTabIndexState } from '../states/selectedTabIndex';

interface ProfileTabsProps {
  tabItems: TabItems;
}

const ProfileTabs = ({ tabItems }: ProfileTabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useRecoilState(
    selectedTabIndexState
  );

  const handleTabItemClick = (index: number) => {
    setSelectedTabIndex(index);
  };

  console.log(selectedTabIndex);

  return (
    <>
      <ProfileTabsContainer>
        {Object.entries(tabItems).map(([label, tabItem], index) => (
          <ProfileTabItem
            onTabItemClick={() => handleTabItemClick(index)}
            key={index}
            title={`${tabItem.value} ${label}`}
            data={tabItem.data}
            selected={index === selectedTabIndex}
          />
        ))}
      </ProfileTabsContainer>
      <ProfileTabItemBottomBarContainer selectedTabIndex={selectedTabIndex}>
        <ProfileTabItemBottomBar />
      </ProfileTabItemBottomBarContainer>
    </>
  );
};

export default ProfileTabs;
