import Confirm from './Confirm';
import { Button } from '@components/Button';

interface LoginConfirm {
  handleClickCancel: () => void;
  handleClickConfirm: () => void;
  location: string;
}

const LoginConfirm = ({
  handleClickCancel,
  handleClickConfirm,
  location
}: LoginConfirm) => {
  return (
    <Confirm
      emoji='🔒'
      content={`로그인이 필요한 서비스입니다.
       로그인하시겠습니까?`}
      contentFontSize={16}
      nextPageLink={`/login?redirect=${location}`}
      CancelButton={
        <Button
          width={120}
          height={50}
          bold={true}
          dark={false}
          label={'취소'}
          handleClick={handleClickCancel}
        />
      }
      ConfirmButton={
        <Button
          width={120}
          height={50}
          bold={true}
          dark={true}
          label={'확인'}
          handleClick={handleClickConfirm}
        />
      }
    />
  );
};
export default LoginConfirm;
