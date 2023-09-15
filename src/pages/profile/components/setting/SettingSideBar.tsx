import { Link } from '@components/Link';
import {
  SettingSideBarBackground,
  SettingSideBarSection,
  SettingSideBarPage,
  Heading,
  SettingUl,
  SettingLi
} from './SettingSideBar.style';
import { useSetRecoilState } from 'recoil';
import { editModeState } from '@pages/profile/states/editMode';

interface SettingSideBarProps {
  active?: boolean;
}

const SettingSideBar = ({ active }: SettingSideBarProps) => {
  const setEditMode = useSetRecoilState(editModeState);
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setEditMode(false);
  };
  return (
    <SettingSideBarSection active={active}>
      <SettingSideBarBackground
        onClick={handleBackgroundClick}></SettingSideBarBackground>
      <SettingSideBarPage active={active}>
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
    </SettingSideBarSection>
  );
};

export default SettingSideBar;
