import styled from '@emotion/styled';
import Link from '../../components/Link';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';

const LandingMain = styled.main`
  background: ${({ theme }) => theme['linearGradientPurple']};
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  width: 223px;
  height: 44px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 120px;
  margin-bottom: 534px;
`;

const ButtonLayout = styled.div`
  & > a {
    display: block;
  }
  & > a + a {
    margin-top: 16px;
  }
`;

const LandingPage = () => {
  return (
    <LandingMain>
      <Heading />
      <ButtonLayout>
        <Link
          pageLink={'/login'}
          size={'16'}
          color={'white'}>
          <Button
            width={300}
            height={50}
            label={'로그인'}
            handleClick={() => {}}
            dark={false}
            bold={false}
          />
        </Link>
        <Link
          pageLink={'/signup'}
          size={'16'}
          color={'white'}>
          <Button
            width={300}
            height={50}
            label={'회원가입'}
            handleClick={() => {}}
            dark={true}
            bold={false}
          />
        </Link>
      </ButtonLayout>
    </LandingMain>
  );
};

export default LandingPage;
