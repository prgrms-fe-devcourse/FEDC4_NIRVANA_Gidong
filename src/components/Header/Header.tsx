import { HeaderLayout, Logo, LeftLayout, RightLayout } from './Header.style';
import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
import { DotBadge } from '@components/Badge';

interface HeaderProps {
  backLink?: string;
}

const Header = ({ backLink }: HeaderProps) => {
  return (
    <HeaderLayout>
      <LeftLayout>
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
      </LeftLayout>
      <RightLayout>
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
      </RightLayout>
    </HeaderLayout>
  );
};

export default Header;
