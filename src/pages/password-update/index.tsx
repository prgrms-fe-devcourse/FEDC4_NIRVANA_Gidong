import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import putUpdatePassword from '@apis/password';
import { Footer } from '@components/Footer';
import { Button } from '@components/Button';
import { UserInput } from '@components/UserInput';
import { USER_INPUT, LABEL, PASSWORD_HINT } from './constants';
import isPasswordOk from './validations';
import { PasswordHint } from './components';
import {
  PasswordUpdateForm,
  ButtonContainer,
  PasswordUpdateContainer,
  LogoContainer,
  Logo
} from './styles';

const PasswordUpdate = () => {
  // test token
  const user = {
    token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmYxNmNjMTY5Yzc5MDU3YjVmOGVjMCIsImVtYWlsIjoibmFuYTEyNEBuYXZlci5jb20ifSwiaWF0IjoxNjk0NDM5MzE1fQ.heYeAayvX78n0NooS-7H4HlbeHCvquXdFl7tRIVkEHM'
  };
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password && passwordConfirm && password === passwordConfirm) {
      putUpdatePassword({ password, token: user.token }).then(() =>
        navigate('/setting')
      );
    }
  };

  return (
    <>
      <PasswordUpdateContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

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
