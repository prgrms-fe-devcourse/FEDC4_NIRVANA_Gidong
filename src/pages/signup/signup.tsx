import {
  LandingMain,
  HeadingContentContainer,
  Heading
} from '@pages/landing/Landing.style';
import SignUpForm from './components/SignUpForm';

const SignUp = () => {
  return (
    <LandingMain>
      <HeadingContentContainer>
        <Heading />
      </HeadingContentContainer>
      <SignUpForm />
    </LandingMain>
  );
};

export default SignUp;
