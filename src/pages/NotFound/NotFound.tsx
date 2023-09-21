import { Alert } from '@components/Alert';
import { LandingMain } from '@pages/landing/Landing.style';

const NotFound = () => {
  return (
    <LandingMain>
      <Alert
        emoji='😢'
        content='404! 잘못된 페이지 접근이에요!'
        buttonLabel='메인화면으로 이동'
        nextPageLink='/posts'
      />
    </LandingMain>
  );
};

export default NotFound;
