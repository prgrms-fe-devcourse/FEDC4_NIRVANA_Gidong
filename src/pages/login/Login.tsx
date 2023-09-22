import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postLogInUser from '@apis/login';
import { Button } from '@components/Button';
import { UserInput } from '@components/UserInput';
import { USER_INPUT } from './constants';
import { GoToSignUp } from './components';
import {
  LoginForm,
  ButtonContainer,
  LoginContainer,
  LogoContainer,
  Logo
} from './Login.style';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorCatched, setErrorCatched] = useState<boolean>(false);
  const navigate = useNavigate();
  let timer = 0;

  const [userSessionData, setUserSessionData] = useSessionStorage<
    Pick<User, '_id' | 'token' | 'image' | 'fullName'>
  >('userData', {
    _id: '',
    token: '',
    image: '',
    fullName: ''
  });

  useEffect(() => {
    if (userSessionData.token) {
      navigate('/meditation');
    }
  }, [userSessionData, navigate]);

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
    postLogInUser({ email, password })
      .then((res) => {
        const { user, token } = res.data;
        console.log(res.data);
        setUserSessionData({
          _id: user._id,
          token,
          image: user.image,
          fullName: user.fullName
        });
      })
      .catch((err) => {
        console.log(err);
        setErrorCatched(true);
      });
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
          show={errorCatched}
          errorMessage={USER_INPUT.ERROR_MESSAGE}
        />
        <UserInput
          name={USER_INPUT.PASSWORD.NAME}
          placeholder={USER_INPUT.PASSWORD.PLACE_HOLDER}
          title={USER_INPUT.PASSWORD.TITLE}
          handleChange={handleInputChange}
          type={USER_INPUT.PASSWORD.TYPE}
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
