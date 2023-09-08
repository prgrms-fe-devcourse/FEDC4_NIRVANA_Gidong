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
import { ProfileNavigation } from './components/ProfileNavigation';

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
        <ProfileNavigation
          totalMeditation={10}
          totalFollower={30}
          totalFollowing={300}
        />
      </ProfileContainer>
    </ProfilePage>
  );
};

export default Profile;
