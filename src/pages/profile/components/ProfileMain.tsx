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
}

const ProfileMain = ({ tabItems, fullName }: ProfileMainProps) => {
  return (
    <ProfileMainSection>
      <ProfileHeader />
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
