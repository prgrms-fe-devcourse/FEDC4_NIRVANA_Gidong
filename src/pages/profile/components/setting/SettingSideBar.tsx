import { Link } from '@components/Link';
import {
  SettingSideBarBackground,
  SettingSideBarPage,
  Heading,
  SettingUl,
  SettingLi
} from './SettingSideBar.style';

const SettingSideBar = () => {
  return (
    <SettingSideBarBackground>
      <SettingSideBarPage>
        <Heading>환경설정</Heading>
        <SettingUl>
          <SettingLi>
            <Link
              pageLink='/setting/password'
              size={16}
              color='black'>
              비밀번호 변경
            </Link>
          </SettingLi>
          <SettingLi>로그아웃</SettingLi>
        </SettingUl>
      </SettingSideBarPage>
    </SettingSideBarBackground>
  );
};

export default SettingSideBar;
