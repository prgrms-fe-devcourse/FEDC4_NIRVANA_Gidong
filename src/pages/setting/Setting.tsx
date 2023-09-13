import { Link } from '@components/Link';
import { SettingPage, Heading, SettingUl, SettingLi } from './Setting.style';

const Setting = () => {
  return (
    <SettingPage>
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
    </SettingPage>
  );
};

export default Setting;
