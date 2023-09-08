import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import UserInput from '@components/UserInput';
import Alert from '@/components/Alert';
import { isEmailOk, isNicknameOk, isPasswordOk } from './validations';
import { signUpUser } from '@/apis/user/getUserData';
import { USERINPUT } from './constants';
import {
  SignUpForm,
  ButtonContainer,
  SignUpContainer,
  LogoContainer,
  Logo
} from './styles';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const navigate = useNavigate();
  let timer = 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      switch (name) {
        case 'email':
          setEmail(value);
          break;
        case 'nickname':
          setNickname(value);
          break;
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

    if (
      email &&
      nickname &&
      password &&
      passwordConfirm &&
      password === passwordConfirm
    ) {
      signUpUser({ email, password, fullName: nickname })
        .then(() => navigate('/login'))
        // TODO: 회원가입 성공시 로그인 페이지로 이동할 수 있는 Alert
        .catch((error) => {
          console.log(error);
          setError(true);
          // TODO: 이메일 중복 오류시 이메일 중복 오류 Alert
        });
    }

    return;
  };

  return (
    <SignUpContainer>
      {error && <Alert />}
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <UserInput
          name={USERINPUT.EMAIL.NAME}
          placeholder={USERINPUT.EMAIL.PLACE_HOLDER}
          title={USERINPUT.EMAIL.TITLE}
          success={isEmailOk(email)}
          errorMessage={USERINPUT.EMAIL.ERROR_MESSAGE}
          successMessage={USERINPUT.EMAIL.SUCCESS_MESSAGE}
          handleChange={handleInputChange}
          show={email.length > 0}
        />
        <UserInput
          name={USERINPUT.NICKNAME.NAME}
          placeholder={USERINPUT.NICKNAME.PLACE_HOLDER}
          title={USERINPUT.NICKNAME.TITLE}
          success={isNicknameOk(nickname)}
          errorMessage={USERINPUT.NICKNAME.ERROR_MESSAGE}
          successMessage={USERINPUT.NICKNAME.SUCCESS_MESSAGE}
          handleChange={handleInputChange}
          show={nickname.length > 0}
        />
        <UserInput
          name={USERINPUT.PASSWORD.NAME}
          type={USERINPUT.PASSWORD.TYPE}
          placeholder={USERINPUT.PASSWORD.PLACE_HOLDER}
          title={USERINPUT.PASSWORD.TITLE}
          success={isPasswordOk(password)}
          errorMessage={USERINPUT.PASSWORD.ERROR_MESSAGE}
          successMessage={USERINPUT.PASSWORD.SUCCESS_MESSAGE}
          handleChange={handleInputChange}
          show={password.length > 0}
        />
        <UserInput
          name={USERINPUT.PASSWORD_CONFIRM.NAME}
          type={USERINPUT.PASSWORD_CONFIRM.TYPE}
          placeholder={USERINPUT.PASSWORD_CONFIRM.PLACE_HOLDER}
          title={USERINPUT.PASSWORD_CONFIRM.TITLE}
          success={isPasswordOk(password) && password === passwordConfirm}
          errorMessage={USERINPUT.PASSWORD_CONFIRM.ERROR_MESSAGE}
          successMessage={USERINPUT.PASSWORD_CONFIRM.SUCCESS_MESSAGE}
          handleChange={handleInputChange}
          show={passwordConfirm.length > 0}
        />
        <ButtonContainer>
          <Button
            label='취소'
            width={125}
            height={42}
            bold={false}
            dark={false}
            handleClick={() => navigate('/landing')}
          />
          <Button
            label='회원가입'
            width={125}
            height={42}
            bold={false}
            dark={true}
            handleClick={() => handleSubmit}
          />
        </ButtonContainer>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;