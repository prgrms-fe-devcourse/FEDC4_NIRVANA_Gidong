import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import { getUser } from '@apis/user';
import createTabItems from './utils/createTabItems';
import { editModeState } from './states/editMode';
import { ProfileInfoContainer, ProfilePage } from './Profile.style';
import {
  ProfileInfo,
  ProfileCover,
  ProfileMain,
  ProfileEdit,
  SettingSideBar
} from '@pages/profile/components';
import { getMyFollowData } from '@/utils';

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

  const [{ _id: currentUserId }] = useSessionStorage<Pick<User, '_id'>>(
    'userData',
    {
      _id: ''
    }
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
          refetch={() => refetch()}
        />
        {editMode ? (
          <ProfileEdit refetch={() => refetch()} />
        ) : (
          <ProfileMain
            myProfile={currentUserId === userId}
            myFollowData={getMyFollowData(data?.followers, currentUserId)}
            profileId={userId}
            tabItems={tabItems}
            openSidebar={openSidebar}
            fullName={isLoading ? '' : data.fullName}
          />
        )}
      </ProfileInfoContainer>
    </ProfilePage>
  );
};

export default Profile;
