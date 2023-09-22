import ReactDom from 'react-dom';
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

interface SettingSideBarProps {
  closeSidebar: () => void;
}

const SettingSideBar = ({ closeSidebar }: SettingSideBarProps) => {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    closeSidebar();
  };

  const [, , deleteUserValue] = useSessionStorage('userData', {
    _id: '',
    token: ''
  });

  const handleLogoutClick = () => {
    deleteUserValue();
    window.location.reload();
  };

  return ReactDom.createPortal(
    <SettingSideBarSection>
      <SettingSideBarBackground
        onClick={handleBackgroundClick}></SettingSideBarBackground>
      <SettingRightSideBar>
        <Heading>환경설정</Heading>
        <SettingUl>
          <SettingLi onClick={closeSidebar}>
            <Link
              pageLink='#edit'
              size={16}
              color='none'>
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
    </SettingSideBarSection>,
    document.getElementById('modal-root')
  );
};

export default SettingSideBar;
