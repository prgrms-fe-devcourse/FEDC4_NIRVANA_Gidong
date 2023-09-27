import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import postLogInUser from '@apis/login';
import { Button } from '@components/Button';
import { UserInput } from '@components/UserInput';
import { USER_INPUT } from './constants';
import { GoToSignUp } from './components';
import { LoginForm, ButtonContainer } from './Login.style';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types';
import {
  Heading,
  HeadingContentContainer,
  LandingMain
} from '@pages/landing/Landing.style';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorCatched, setErrorCatched] = useState<boolean>(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectTo = search.replace('?redirect=', '');

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
      if (redirectTo) {
        navigate(redirectTo);
      } else {
        navigate('/meditation');
      }
    }
  }, [userSessionData.token, navigate, redirectTo, search]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

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
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postLogInUser({ email, password })
      .then((res) => {
        const { user, token } = res.data;
        setUserSessionData({
          _id: user._id,
          token,
          image: user.image,
          fullName: user.fullName
        });
      })
      .catch(() => {
        setErrorCatched(true);
      });
  };

  return (
    <LandingMain>
      <HeadingContentContainer>
        <Heading />
      </HeadingContentContainer>
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
    </LandingMain>
  );
};

export default Login;
