import { ProfileMainSection } from './ProfileMain.style';
import {
  ProfileCarousel,
  ProfileHeader,
  ProfileTabs
} from '@pages/profile/components';
import { TabItems } from '../utils/createTabItems';
import { Follow } from '@/types/Follow';

interface ProfileMainProps {
  tabItems: TabItems;
  fullName: string;
}

const ProfileMain = ({ tabItems, fullName }: ProfileMainProps) => {
  return (
    <ProfileMainSection>
      <ProfileTabs tabItems={tabItems}></ProfileTabs>
      <ProfileCarousel
        tabItems={tabItems}
        fullName={fullName}
      />
    </ProfileMainSection>
  );
};

export default ProfileMain;
