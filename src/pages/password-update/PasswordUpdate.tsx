import { useState } from 'react';
import putUpdatePassword from '@apis/password';
import { Alert } from '@components/Alert';
import { Footer } from '@components/Footer';
import { Button } from '@components/Button';
import { UserInput } from '@components/UserInput';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types';
import { USER_INPUT, LABEL, PASSWORD_HINT } from './constants';
import isPasswordOk from './utils/isPasswordOk';
import { PasswordHint } from '@pages/password-update/components';
import {
  PasswordUpdateForm,
  ButtonContainer,
  PasswordUpdateContainer,
  LogoContainer,
  Logo
} from './PasswordUpdate.style';

const PasswordUpdate = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [passwordChanged, setPasswordChanged] = useState<boolean>(false);
  let timer = 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      switch (name) {
        case 'password':
          setPassword(value);
          break;
        case 'passwordConfirm':
          setPasswordConfirm(value);
          break;
        default:
          break;
      }
    }, 200);
  };

  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password && passwordConfirm && password === passwordConfirm) {
      putUpdatePassword({ password, token: `Bearer ${userSessionData.token}` })
        .then(() => setPasswordChanged(true))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <PasswordUpdateContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        {passwordChanged && (
          <Alert
            emoji={'✅'}
            content={'비밀번호가 정상적으로 변경되었습니다.'}
            buttonLabel={'확인'}
            nextPageLink={
              userSessionData.token
                ? `/profile/${userSessionData._id}`
                : '/login'
            }
          />
        )}

        <PasswordUpdateForm onSubmit={handleSubmit}>
          <PasswordHint text={PASSWORD_HINT} />
          <UserInput
            name={USER_INPUT.NEW_PASSWORD.NAME}
            placeholder={USER_INPUT.NEW_PASSWORD.PLACE_HOLDER}
            title={USER_INPUT.NEW_PASSWORD.TITLE}
            handleChange={handleInputChange}
            show={password.length > 0}
            success={isPasswordOk(password)}
            type={USER_INPUT.NEW_PASSWORD.TYPE}
            errorMessage={USER_INPUT.NEW_PASSWORD.ERROR_MESSAGE}
            successMessage={USER_INPUT.NEW_PASSWORD.SUCCESS_MESSAGE}
          />
          <UserInput
            name={USER_INPUT.NEW_PASSWORD_CONFIRM.NAME}
            placeholder={USER_INPUT.NEW_PASSWORD_CONFIRM.PLACE_HOLDER}
            title={USER_INPUT.NEW_PASSWORD_CONFIRM.TITLE}
            handleChange={handleInputChange}
            show={passwordConfirm.length > 0}
            success={password === passwordConfirm}
            type={USER_INPUT.NEW_PASSWORD_CONFIRM.TYPE}
            errorMessage={USER_INPUT.NEW_PASSWORD_CONFIRM.ERROR_MESSAGE}
            successMessage={USER_INPUT.NEW_PASSWORD_CONFIRM.SUCCESS_MESSAGE}
          />
          <ButtonContainer>
            <Button
              label={LABEL.CHANGE_PASSWORD}
              width={300}
              height={45}
              bold={false}
              dark={true}
              handleClick={() => handleSubmit}
            />
          </ButtonContainer>
        </PasswordUpdateForm>
      </PasswordUpdateContainer>
      <Footer />
    </>
  );
};

export default PasswordUpdate;
