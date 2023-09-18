import { ProfileMainSection } from './ProfileMain.style';
import { ProfileHeader } from '../ProfileHeader';
import { ProfileTabs } from '../ProfileTabs';
import { ProfileTabItem } from '../ProfileTabs';
import { ProfileCarousel } from '../ProfileCarousel';
import { TabItem } from '@pages/profile/utils/createTabItems';

interface ProfileMainProps {
  tabItems: TabItem[];
  openSidebar: () => void;
}

const ProfileMain = ({ tabItems, openSidebar }: ProfileMainProps) => {
  return (
    <ProfileMainSection>
      <ProfileHeader openSidebar={openSidebar} />
      <ProfileTabs>
        {tabItems.map((tabItem, index) => (
          <ProfileTabItem
            key={tabItem.label}
            title={`${tabItem.value} ${tabItem.label}`}
            data={tabItem.data}
            index={index}
          />
        ))}
      </ProfileTabs>
      <ProfileCarousel totalIndex={tabItems.length} />
    </ProfileMainSection>
  );
};

export default ProfileMain;
