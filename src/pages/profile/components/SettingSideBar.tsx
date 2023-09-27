import { useEffect, useState } from 'react';
import { Link } from '@components/Link';
import {
  SettingSideBarBackground,
  SettingSideBarSection,
  SettingRightSideBar,
  Heading,
  SettingUl,
  SettingLi
} from './SettingSideBar.style';
import useSessionStorage from '@hooks/useSessionStorage';
import LogoutAlert from './LogoutAlert';
import { useNavigate } from 'react-router-dom';

interface SettingSideBarProps {
  closeSidebar: () => void;
  sideBarOpened: boolean;
}

const SettingSideBar = ({
  closeSidebar,
  sideBarOpened
}: SettingSideBarProps) => {
  const [logoutModal, setLogoutModal] = useState(false);
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    closeSidebar();
  };

  const navigate = useNavigate();

  const [, , deleteUserValue] = useSessionStorage('userData', {
    _id: '',
    token: ''
  });

  const handleLogoutClick = () => {
    closeSidebar();
    setLogoutModal((prev) => !prev);
    deleteUserValue();
  };

  return (
    <>
      {logoutModal && (
        <LogoutAlert
          handleLogoutClick={() => {
            setLogoutModal((prev) => !prev);
            navigate('/', { replace: true });
          }}
        />
      )}
      <SettingSideBarSection sideBarOpened={sideBarOpened}>
        <SettingSideBarBackground onClick={handleBackgroundClick} />
        <SettingRightSideBar sideBarOpened={sideBarOpened}>
          <Heading>환경설정</Heading>
          <SettingUl sideBarOpened={sideBarOpened}>
            <SettingLi onClick={closeSidebar}>
              <Link
                pageLink='#edit'
                size={16}>
                <p>프로필 수정</p>
              </Link>
            </SettingLi>
            <SettingLi>
              <Link
                pageLink='/setting/password-update'
                size={16}
                color='black'>
                <p>비밀번호 변경</p>
              </Link>
            </SettingLi>
            <SettingLi onClick={handleLogoutClick}>
              <p>로그아웃</p>
            </SettingLi>
          </SettingUl>
        </SettingRightSideBar>
      </SettingSideBarSection>
    </>
  );
};

export default SettingSideBar;
