import { ProfileMainSection } from './ProfileMain.style';
import { ProfileCarousel, ProfileTabs } from '@pages/profile/components';
import { TabItems } from '../utils/createTabItems';

interface ProfileMainProps {
  tabItems: TabItems;
  fullName: string;
  myProfile: boolean;
}

const ProfileMain = ({ tabItems, fullName, myProfile }: ProfileMainProps) => {
  return (
    <ProfileMainSection>
      <ProfileTabs tabItems={tabItems}></ProfileTabs>
      <ProfileCarousel
        tabItems={tabItems}
        fullName={fullName}
        myProfile={myProfile}
      />
    </ProfileMainSection>
  );
};

export default ProfileMain;
