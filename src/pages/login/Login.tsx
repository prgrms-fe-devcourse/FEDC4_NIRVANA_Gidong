import {
  Heading,
  HeadingContentContainer,
  LandingMain
} from '@pages/landing/Landing.style';
import LoginForm from './components/LoginForm';

const Login = () => {
  return (
    <LandingMain>
      <HeadingContentContainer>
        <Heading />
      </HeadingContentContainer>
      <LoginForm />
    </LandingMain>
  );
};

export default Login;
