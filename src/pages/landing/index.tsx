import styled from '@emotion/styled';
import Link from '../../components/Link';
import Button from '../../components/Button';
import logo from '../../assets/logo.svg';
import Icon from '@/components/Icon';

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
  margin-bottom: 469px;
`;

const LinkLayout = styled.div`
  & > a {
    display: block;
  }
  & > a + a {
    margin-top: 16px;
  }
`;

const PreviewLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 26px;
  & > span {
    color: ${({ theme }) => theme.white};
    margin-bottom: 5px;
  }

  & > a {
    display: block;
    padding: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.white};
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  & > a > span {
    margin-left: 5px;
  }
`;

const PreviewSpan = styled.span`
  font-size: 12px;
`;

const LandingPage = () => {
  return (
    <LandingMain>
      <Heading />
      <PreviewLink>
        <PreviewSpan>다른 사람들의 후기를 먼저 만나보세요.</PreviewSpan>
        <Link
          pageLink='/posts'
          size='12'
          color='white'>
          명상 후기 보러가기
          <Icon
            name='arrow_forward'
            size={11}
            color='white'></Icon>
        </Link>
      </PreviewLink>
      <LinkLayout>
        <Link
          pageLink='/login'
          size='16'
          color='white'>
          <Button
            width={300}
            height={50}
            label='로그인'
            handleClick={() => {}}
            dark={false}
            bold={false}
          />
        </Link>
        <Link
          pageLink='/signup'
          size='16'
          color='white'>
          <Button
            width={300}
            height={50}
            label='회원가입'
            handleClick={() => {}}
            dark={true}
            bold={false}
          />
        </Link>
      </LinkLayout>
    </LandingMain>
  );
};

export default LandingPage;
