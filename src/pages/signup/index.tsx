import { useState } from 'react';
import Button from '@components/Button';
import UserInput from '@components/UserInput';
import { isEmailOk, isNicknameOk, isPasswordOk } from './validations';
import { signUpUser } from '@/apis/user/getUserData';
import { USERINPUT } from './constants';
import {
  SignUpForm,
  ButtonContainer,
  SignUpContainer,
  LogoContainer
} from './styles';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  let timer = 0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      switch (event.target.name) {
        case 'email':
          setEmail(event.target.value);
          break;
        case 'nickname':
          setNickname(event.target.value);
          break;
        case 'password':
          setPassword(event.target.value);
          break;
        case 'passwordConfirm':
          setPasswordConfirm(event.target.value);
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
      signUpUser({ email, password, fullName: nickname });
    }
  };

  return (
    <SignUpContainer>
      <LogoContainer>
        <svg
          width='296'
          height='69'
          viewBox='0 0 107 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0.0639063 -9.53674e-07H5.94391L11.7839 7V-9.53674e-07H12.9839V14H8.28391L1.28391 4.68V14H0.0639063V-9.53674e-07ZM14.1069 -9.53674e-07H20.6269V14H14.1069V-9.53674e-07ZM21.7631 -9.53674e-07H35.1431C35.7965 -9.53674e-07 36.3965 0.166666 36.9431 0.5C37.5031 0.82 37.9431 1.26 38.2631 1.82C38.5965 2.36667 38.7631 2.96667 38.7631 3.62C38.7631 4.48667 38.4965 5.27333 37.9631 5.98C37.4298 6.68667 36.7565 7.14 35.9431 7.34C36.6631 7.54 37.2498 7.92 37.7031 8.48C38.1698 9.04 38.4031 9.67333 38.4031 10.38V14H31.7031V9.66C31.7031 9.23333 31.6231 8.9 31.4631 8.66C31.2765 8.38 31.0631 8.17333 30.8231 8.04C30.5565 7.89333 30.2565 7.78667 29.9231 7.72C29.5765 7.65333 29.2498 7.61333 28.9431 7.6L28.4031 7.58V14H21.7631V-9.53674e-07ZM29.1031 6.42C29.5831 6.42 30.0231 6.30667 30.4231 6.08C30.8365 5.84 31.1565 5.52 31.3831 5.12C31.6231 4.70667 31.7431 4.26667 31.7431 3.8C31.7431 3.32 31.6231 2.88 31.3831 2.48C31.1565 2.06667 30.8365 1.74 30.4231 1.5C30.0231 1.26 29.5831 1.14 29.1031 1.14H28.4031V6.44L29.1031 6.42ZM39.9309 -9.53674e-07H53.2709C53.9509 -9.53674e-07 54.5709 0.166666 55.1309 0.5C55.7043 0.82 56.1576 1.26667 56.4909 1.84C56.8243 2.4 56.9909 3.02 56.9909 3.7C56.9909 4.35333 56.8309 4.97333 56.5109 5.56C56.1909 6.14667 55.7643 6.62 55.2309 6.98C55.7643 7.35333 56.1909 7.84 56.5109 8.44C56.8309 9.02667 56.9909 9.64667 56.9909 10.3C56.9909 10.9667 56.8243 11.5867 56.4909 12.16C56.1576 12.72 55.7043 13.1667 55.1309 13.5C54.5709 13.8333 53.9509 14 53.2709 14H39.9309V-9.53674e-07ZM47.2509 6.42C47.7309 6.42 48.1709 6.30667 48.5709 6.08C48.9843 5.84 49.3043 5.52 49.5309 5.12C49.7709 4.70667 49.8909 4.26667 49.8909 3.8C49.8909 3.32 49.7709 2.88 49.5309 2.48C49.3043 2.06667 48.9843 1.74 48.5709 1.5C48.1709 1.26 47.7309 1.14 47.2509 1.14H46.9509V6.4C47.0176 6.41333 47.1176 6.42 47.2509 6.42ZM47.2509 12.84C47.7309 12.84 48.1709 12.7267 48.5709 12.5C48.9843 12.26 49.3043 11.94 49.5309 11.54C49.7709 11.1267 49.8909 10.68 49.8909 10.2C49.8909 9.73333 49.7709 9.3 49.5309 8.9C49.3043 8.48667 48.9843 8.16667 48.5709 7.94C48.1709 7.7 47.7309 7.58 47.2509 7.58H46.9509V12.82C47.0176 12.8333 47.1176 12.84 47.2509 12.84ZM62.4095 -9.53674e-07H68.2495L74.4495 14H66.8895L64.7895 9.36H60.3895L58.5895 14H57.1295L62.4095 -9.53674e-07ZM64.2295 8.14L62.4095 4.08L60.8295 8.14H64.2295ZM75.2397 -9.53674e-07H81.1197L86.9597 7V-9.53674e-07H88.1597V14H83.4597L76.4597 4.68V14H75.2397V-9.53674e-07ZM94.0892 -9.53674e-07H99.9292L106.129 14H98.5692L96.4692 9.36H92.0692L90.2692 14H88.8092L94.0892 -9.53674e-07ZM95.9092 8.14L94.0892 4.08L92.5092 8.14H95.9092Z'
            fill='white'
          />
        </svg>
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
            handleClick={() => handleSubmit}
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
