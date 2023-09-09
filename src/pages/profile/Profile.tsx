// import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import { getUserData } from '@/apis/user/getUserData';
import {
  ProfileContainer,
  ProfilePage,
  ProfileBackgroundContainer
} from './Profile.style';
import { ProfileInfo } from './components/ProfileInfo';
import { ProfileBackground } from './components/ProfileBackground';
import { ProfileConfig } from './components/ProfileConfig';
import { ProfileTabs, ProfileTabItem } from './components/ProfileTabs';
import { ProfileCarousel } from './components/ProfileCarousel';
import { PROFILE_TABS } from './constants/profileTabs';

const Profile = () => {
  // const { userId } = useParams<{ userId: string }>();

  // const { data, isLoading, isError, error } = useQuery(
  //   ['userData', userId],
  //   () => getUserData(userId),
  //   { enabled: !!userId }
  // );
  // console.log(data, isLoading, isError, error);

  return (
    <ProfilePage>
      <ProfileBackgroundContainer>
        <ProfileBackground src='https://www.programiz.com/blog/content/images/2022/03/Banner-Image-1.png' />
      </ProfileBackgroundContainer>
      <ProfileContainer>
        <ProfileInfo
          email='test@email.com'
          fullName='testMan'
          avatarImgSrc='https://avatars.githubusercontent.com/u/76855211?v=4'
          meditationStack={50}
        />
        <ProfileConfig />
        <ProfileTabs>
          <ProfileTabItem
            title={`50번 ${PROFILE_TABS.MEDITATION}`}
            index={0}
          />
          <ProfileTabItem
            title={`50번 ${PROFILE_TABS.FOLLOWER}`}
            index={1}
          />
          <ProfileTabItem
            title={`50번 ${PROFILE_TABS.FOLLOWING}`}
            index={2}
          />
          <ProfileTabItem
            title={`${PROFILE_TABS.INFO}`}
            index={3}
          />
        </ProfileTabs>
        <ProfileCarousel totalIndex={PROFILE_TABS.TOTAL_INDEX} />
      </ProfileContainer>
    </ProfilePage>
  );
};

export default Profile;
