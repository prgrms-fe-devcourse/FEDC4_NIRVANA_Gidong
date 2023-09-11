import Link from '../../components/Link';
import Button from '../../components/Button';
import Icon from '@/components/Icon';
import {
  LandingMain,
  Heading,
  PreviewLink,
  PreviewSpan,
  LinkLayout
} from './style';

const LandingPage = () => {
  return (
    <LandingMain>
      <Heading />
      <PreviewLink>
        <PreviewSpan>다른 사람들의 후기를 먼저 만나보세요.</PreviewSpan>
        <Link
          pageLink='/posts'
          size={12}
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
          size={16}
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
          size={16}
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
