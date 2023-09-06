import styled from '@emotion/styled';
import Icon from '../Icon';
import Link from '../Link';
import { DotBadge } from '../Badge';

import logo from '../../assets/logo.svg';

const Layout = styled.div`
  height: 50px;
  width: 390px;
  background-color: #47346d;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;
`;

const Logo = styled.h1`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 109px;
  height: 17px;
`;

const LeftLayout = styled.div`
  display: flex;
  align-items: center;
`;
const RightLayout = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 15px;
  }
`;

interface HeaderProps {
  backLink?: string;
}

const Header = ({ backLink }: HeaderProps) => {
  return (
    <Layout>
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
            size='23'>
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
    </Layout>
  );
};

export default Header;
