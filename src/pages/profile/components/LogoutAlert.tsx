import { Alert } from '@components/Alert';

interface LogoutAlertProps {
  handleLogoutClick: () => void;
}

const LogoutAlert = ({ handleLogoutClick }: LogoutAlertProps) => {
  return (
    <Alert
      emoji={'👋🏻'}
      content={`로그아웃 되었습니다 
      다음에 또 만나요!`}
      buttonLabel={'확인'}
      handleClickButton={handleLogoutClick}
    />
  );
};
export default LogoutAlert;
