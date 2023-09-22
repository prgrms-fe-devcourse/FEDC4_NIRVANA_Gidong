import { ProfileMainSection } from './ProfileMain.style';
import {
  ProfileHeader,
  ProfileTabs,
  ProfileTabItem,
  ProfileCarousel
} from '@pages/profile/components';
import { TabItems } from '../utils/createTabItems';

interface ProfileMainProps {
  tabItems: TabItems;
  fullName: string;
  openSidebar: () => void;
}

const ProfileMain = ({ tabItems, openSidebar, fullName }: ProfileMainProps) => {
  return (
    <ProfileMainSection>
      <ProfileHeader openSidebar={openSidebar} />
      <ProfileTabs>
        {Object.entries(tabItems).map(([label, tabItem], index) => (
          <ProfileTabItem
            key={index}
            title={`${tabItem.value} ${label}`}
            data={tabItem.data}
            index={index}
          />
        ))}
      </ProfileTabs>
      <ProfileCarousel
        tabItems={tabItems}
        fullName={fullName}
      />
    </ProfileMainSection>
  );
};

export default ProfileMain;
