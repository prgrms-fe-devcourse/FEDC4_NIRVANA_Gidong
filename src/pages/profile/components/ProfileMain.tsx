import { ProfileMainSection } from './ProfileMain.style';
import {
  ProfileHeader,
  ProfileTabs,
  ProfileTabItem,
  ProfileCarousel
} from '@pages/profile/components';
import { TabItem } from '@pages/profile/utils/createTabItems';

interface ProfileMainProps {
  tabItems: TabItem[];
}

const ProfileMain = ({ tabItems }: ProfileMainProps) => {
  return (
    <ProfileMainSection>
      <ProfileHeader />
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
