import { Link } from '@components/Link';
import { Button } from '@components/Button';
import { LandingMain } from '@pages/landing/Landing.style';
import {
  ContentContainer,
  IconContainer,
  NavButtonContainer,
  StyledAlertBackground
} from '@components/Alert/Alert.style';

const NotFound = () => {
  return (
    <LandingMain>
      <StyledAlertBackground
        width={330}
        height={390}>
        <IconContainer emojiSize={80}>{'😢'}</IconContainer>
        <ContentContainer contentFontSize={16}>
          {'404! 잘못된 페이지 접근이에요!'}
          <NavButtonContainer>
            <Link pageLink={'/'}>
              <Button
                width={300}
                height={50}
                dark={true}
                bold={true}
                label={'메인화면으로 이동하기'}
              />
            </Link>
          </NavButtonContainer>
        </ContentContainer>
      </StyledAlertBackground>
    </LandingMain>
  );
};

export default NotFound;
