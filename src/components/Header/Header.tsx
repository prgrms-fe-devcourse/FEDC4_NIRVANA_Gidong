import {
  HeaderSection,
  Logo,
  LeftContainer,
  RightContainer
} from './Header.style';
import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
import { DotBadge } from '@components/Badge';

interface HeaderProps {
  backLink?: string;
}

const Header = ({ backLink }: HeaderProps) => {
  return (
    <HeaderSection>
      <LeftContainer>
        {backLink ? (
          <Link pageLink=''>
            <Icon
              name='arrow_back_ios'
              color='white'
              size={23}
            />
          </Link>
        ) : (
          <Logo />
        )}
      </LeftContainer>
      <RightContainer>
        <DotBadge
          dot={true}
          color='orange'
          position='top'
          badgeSize={5}>
          <Link
            pageLink='/alert'
            size={23}>
            <Icon
              name='notifications'
              color='white'
              size={23}
            />
          </Link>
        </DotBadge>
        <Link pageLink='/message'>
          <Icon
            name='chat'
            color='white'
            size={23}
          />
        </Link>
      </RightContainer>
    </HeaderSection>
  );
};

export default Header;
