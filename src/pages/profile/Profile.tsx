import createTabItems from './utils/createTabItems';
import { useEffect, useState } from 'react';
import { getUser } from '@apis/user';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { editModeState } from './states/editMode';
import { ProfileInfoContainer, ProfilePage } from './Profile.style';
import {
  ProfileInfo,
  ProfileCover,
  ProfileMain,
  ProfileEdit,
  SettingSideBar
} from '@pages/profile/components';

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const location = useLocation();
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const [editMode, setEditMode] = useRecoilState(editModeState);
  useEffect(() => {
    setEditMode(location.hash === '#edit');
  }, [location.hash, setEditMode]);

  const { data, isLoading, refetch } = useQuery(
    ['userData', userId],
    () => getUser(userId),
    { enabled: !!userId }
  );

  const openSidebar = () => {
    setSideBarOpened(true);
  };

  const closeSidebar = () => {
    console.log('close');
    setSideBarOpened(false);
  };

  const tabItems = createTabItems(data, isLoading);

  return (
    <ProfilePage>
      <SettingSideBar
        sideBarOpened={sideBarOpened}
        closeSidebar={closeSidebar}
      />
      <ProfileCover
        refetch={() => refetch()}
        src={isLoading ? '' : data.coverImage}
      />
      <ProfileInfoContainer>
        <ProfileInfo
          email={isLoading ? '' : data.email}
          fullName={isLoading ? '' : data.fullName}
          avatarImgSrc={isLoading ? '' : data.image}
          meditationStack={50}
          refetch={() => refetch()}
        />
        {editMode ? (
          <ProfileEdit refetch={() => refetch()} />
        ) : (
          <ProfileMain
            tabItems={tabItems}
            openSidebar={openSidebar}
          />
        )}
      </ProfileInfoContainer>
    </ProfilePage>
  );
};

export default Profile;
