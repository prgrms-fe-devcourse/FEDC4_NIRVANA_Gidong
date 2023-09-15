import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import { UserInput } from '@components/UserInput';
import { Alert } from '@components/Alert';
import { isEmailOk, isNicknameOk, isPasswordOk } from './validations';
import postSignUpUser from '@/apis/signup';
import { USER_INPUT, MODAL } from './constants';
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
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [emailErrorCatched, setEmailErrorCatched] = useState<boolean>(false);
  const [signupSucceed, setSignupSucceed] = useState<boolean>(false);

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
      postSignUpUser({ email, password, fullName: nickname })
        .then(() => setSignupSucceed(true))
        .catch((error) => {
          console.log(error);
          setEmailErrorCatched(true);
        });
    }

    return;
  };

  return (
    <SignUpContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      {emailErrorCatched && (
        <Alert
          emoji={MODAL.ERROR.EMOJI}
          content={MODAL.ERROR.CONTENT}
          buttonLabel={MODAL.ERROR.LABEL}
        />
      )}
      {signupSucceed && (
        <Alert
          emoji={MODAL.SUCCESS.EMOJI}
          content={MODAL.SUCCESS.CONTENT}
          buttonLabel={MODAL.SUCCESS.LABEL}
          nextPageLink='/login'
        />
      )}

      <SignUpForm onSubmit={handleSubmit}>
        <UserInput
          name={USER_INPUT.EMAIL.NAME}
          placeholder={USER_INPUT.EMAIL.PLACE_HOLDER}
          title={USER_INPUT.EMAIL.TITLE}
          success={isEmailOk(email)}
          errorMessage={USER_INPUT.EMAIL.ERROR_MESSAGE}
          successMessage={USER_INPUT.EMAIL.SUCCESS_MESSAGE}
          handleChange={handleInputChange}
          show={email.length > 0}
        />
        <UserInput
          name={USER_INPUT.NICKNAME.NAME}
          placeholder={USER_INPUT.NICKNAME.PLACE_HOLDER}
          title={USER_INPUT.NICKNAME.TITLE}
          success={isNicknameOk(nickname)}
          errorMessage={USER_INPUT.NICKNAME.ERROR_MESSAGE}
          successMessage={USER_INPUT.NICKNAME.SUCCESS_MESSAGE}
          handleChange={handleInputChange}
          show={nickname.length > 0}
        />
        <UserInput
          name={USER_INPUT.PASSWORD.NAME}
          type={USER_INPUT.PASSWORD.TYPE}
          placeholder={USER_INPUT.PASSWORD.PLACE_HOLDER}
          title={USER_INPUT.PASSWORD.TITLE}
          success={isPasswordOk(password)}
          errorMessage={USER_INPUT.PASSWORD.ERROR_MESSAGE}
          successMessage={USER_INPUT.PASSWORD.SUCCESS_MESSAGE}
          handleChange={handleInputChange}
          show={password.length > 0}
        />
        <UserInput
          name={USER_INPUT.PASSWORD_CONFIRM.NAME}
          type={USER_INPUT.PASSWORD_CONFIRM.TYPE}
          placeholder={USER_INPUT.PASSWORD_CONFIRM.PLACE_HOLDER}
          title={USER_INPUT.PASSWORD_CONFIRM.TITLE}
          success={isPasswordOk(password) && password === passwordConfirm}
          errorMessage={USER_INPUT.PASSWORD_CONFIRM.ERROR_MESSAGE}
          successMessage={USER_INPUT.PASSWORD_CONFIRM.SUCCESS_MESSAGE}
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
            handleClick={() => navigate('/')}
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
