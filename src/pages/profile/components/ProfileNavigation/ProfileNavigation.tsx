import {
  ProfileNavigationContainer,
  ProfileNavigationItem
} from './ProfileNavigation.style';

const ProfileNavigation = () => {
  return (
    <ProfileNavigationContainer>
      <ProfileNavigationItem selected={true}>
        <strong>{38}번</strong> 명상
      </ProfileNavigationItem>
      <ProfileNavigationItem selected={false}>
        <strong>{100}</strong> 팔로잉
      </ProfileNavigationItem>
      <ProfileNavigationItem selected={false}>
        <strong>{10}K</strong> 팔로워
      </ProfileNavigationItem>
      <ProfileNavigationItem selected={false}>명상정보</ProfileNavigationItem>
    </ProfileNavigationContainer>
  );
};

export default ProfileNavigation;
