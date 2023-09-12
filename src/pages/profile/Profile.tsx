import createTabItems from './utils/createTabItems';
import getUserData from '@apis/user/getUserData';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { editModeState } from './states/editMode';
import { ProfileInfoContainer, ProfilePage } from './Profile.style';
import { ProfileInfo } from './components/ProfileInfo';
import { ProfileCover } from './components/ProfileCover';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileTabs, ProfileTabItem } from './components/ProfileTabs';
import { ProfileCarousel } from './components/ProfileCarousel';
import { ProfileEdit } from './components/ProfileEdit';

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const location = useLocation();
  const [editMode, setEditMode] = useRecoilState(editModeState);
  setEditMode(location.hash === '#edit');

  const { data, isLoading, isError, error } = useQuery(
    ['userData', userId],
    () => getUserData(userId),
    { enabled: !!userId }
  );
  console.log(data, isLoading, isError, error);

  const tabItems = createTabItems(data, isLoading);

  return (
    <ProfilePage>
      <ProfileCover src={isLoading ? '' : data.cover} />
      <ProfileInfoContainer>
        <ProfileInfo
          email={isLoading ? '' : data.email}
          fullName={isLoading ? '' : data.fullName}
          avatarImgSrc={isLoading ? '' : data.image}
          meditationStack={50}
        />
        {editMode ? (
          <ProfileEdit />
        ) : (
          <>
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
          </>
        )}
      </ProfileInfoContainer>
    </ProfilePage>
  );
};

export default Profile;
