import { useState } from 'react';
import Button from '@components/Button';
import UserInput from '@components/UserInput';
import { USER_INPUT } from './constants';
import { GoToSignUp } from './components';
import {
  LoginForm,
  ButtonContainer,
  LoginContainer,
  LogoContainer,
  Logo
} from './styles';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    }, 200);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return;
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <LoginForm onSubmit={handleSubmit}>
        <UserInput
          name={USER_INPUT.EMAIL.NAME}
          placeholder={USER_INPUT.EMAIL.PLACE_HOLDER}
          title={USER_INPUT.EMAIL.TITLE}
          handleChange={handleInputChange}
        />
        <UserInput
          name={USER_INPUT.PASSWORD.NAME}
          placeholder={USER_INPUT.PASSWORD.PLACE_HOLDER}
          title={USER_INPUT.PASSWORD.TITLE}
          handleChange={handleInputChange}
        />
        <ButtonContainer>
          <Button
            label='로그인'
            width={300}
            height={45}
            bold={false}
            dark={true}
            handleClick={() => handleSubmit}
          />
        </ButtonContainer>
        <GoToSignUp />
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
