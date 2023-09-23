import { ProfileMainSection } from './ProfileMain.style';
import {
  ProfileHeader,
  ProfileTabs,
  ProfileTabItem,
  ProfileCarousel
} from '@pages/profile/components';
import { TabItems } from '../utils/createTabItems';
import { Follow } from '@/types/Follow';

interface ProfileMainProps {
  myProfile: boolean;
  myFollowData: Follow;
  tabItems: TabItems;
  fullName: string;
  profileId: string;
  openSidebar: () => void;
}

const ProfileMain = ({
  myProfile,
  tabItems,
  myFollowData,
  fullName,
  profileId,
  openSidebar
}: ProfileMainProps) => {
  return (
    <ProfileMainSection>
      <ProfileHeader
        myProfile={myProfile}
        myFollowData={myFollowData}
        profileId={profileId}
        openSidebar={openSidebar}
      />
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
