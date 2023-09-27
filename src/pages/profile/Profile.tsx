import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import { getUser } from '@apis/user';
import createTabItems from './utils/createTabItems';
import { editModeState } from './states/editMode';
import {
  ProfileInfoContainer,
  ProfilePage,
  ProfileBodyContainer
} from './Profile.style';
import {
  ProfileInfo,
  ProfileCover,
  ProfileMain,
  ProfileEdit,
  SettingSideBar
} from '@pages/profile/components';
import { getMyFollowData } from '@/utils';

const Profile = () => {
  const { userId: profileUserId } = useParams<{ userId: string }>();
  const location = useLocation();
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const [editMode, setEditMode] = useRecoilState(editModeState);

  useEffect(() => {
    setEditMode(location.hash === '#edit');
  }, [location.hash, setEditMode]);

  const {
    data: currentPageProfileData,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['userData', profileUserId],
    queryFn: async () => await getUser(profileUserId)
  });

  const [{ _id: myUserId }] = useSessionStorage<Pick<User, '_id'>>('userData', {
    _id: ''
  });

  const openSidebar = () => {
    setSideBarOpened(true);
  };

  const closeSidebar = () => {
    setSideBarOpened(false);
  };

  const tabItems = createTabItems(currentPageProfileData, isLoading);

  return (
    <ProfilePage>
      <SettingSideBar
        sideBarOpened={sideBarOpened}
        closeSidebar={closeSidebar}
      />
      <ProfileCover
        refetch={() => refetch()}
        src={isLoading ? '' : currentPageProfileData.coverImage}
      />
      <ProfileInfoContainer>
        <ProfileInfo
          email={isLoading ? '' : currentPageProfileData.email}
          fullName={isLoading ? '' : currentPageProfileData.fullName}
          avatarImgSrc={isLoading ? '' : currentPageProfileData.image}
          refetch={() => refetch()}
        />
      </ProfileInfoContainer>
      <ProfileBodyContainer>
        {editMode ? (
          <ProfileEdit refetch={() => refetch()} />
        ) : (
          <ProfileMain
            myProfile={myUserId === profileUserId}
            myFollowData={
              isLoading
                ? null
                : getMyFollowData(currentPageProfileData?.followers, myUserId)
            }
            profileId={profileUserId}
            tabItems={tabItems}
            openSidebar={openSidebar}
            fullName={isLoading ? '' : currentPageProfileData.fullName}
            refetch={() => refetch()}
          />
        )}
      </ProfileBodyContainer>
    </ProfilePage>
  );
};

export default Profile;
