import { ProfileTabsContainer } from './ProfileTabs.style';

interface ProfileTabsProps {
  children: React.ReactNode;
}

const ProfileTabs = ({ children }: ProfileTabsProps) => {
  return <ProfileTabsContainer>{children}</ProfileTabsContainer>;
};

export default ProfileTabs;
