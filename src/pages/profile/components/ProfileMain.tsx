import { ProfileMainSection } from './ProfileMain.style';
import {
  ProfileHeader,
  ProfileTabs,
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
      <ProfileTabs tabItems={tabItems}></ProfileTabs>
      <ProfileCarousel
        tabItems={tabItems}
        fullName={fullName}
      />
    </ProfileMainSection>
  );
};

export default ProfileMain;
