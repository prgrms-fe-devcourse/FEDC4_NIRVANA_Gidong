// import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import { getUserData } from '@/apis/user/getUserData';
import { ProfileContainer } from './styles';
import ProfileInfo from './components/ProfileInfo';

const Profile = () => {
  // const { userId } = useParams<{ userId: string }>();

  // const { data, isLoading, isError, error } = useQuery(
  //   ['userData', userId],
  //   () => getUserData(userId),
  //   { enabled: !!userId }
  // );
  // console.log(data, isLoading, isError, error);

  return (
    <ProfileContainer>
      <ProfileInfo
        email='test@email.com'
        fullName='testMan'
        avatarImgSrc='https://avatars.githubusercontent.com/u/76855211?v=4'
        meditationStack={50}
      />
    </ProfileContainer>
  );
};

export default Profile;
