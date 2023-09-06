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
`;

const BackButton = styled.div`
  background: none;
  border: none;
  outline: none;
  &:before {
    width: 14px;
    height: 14px;
    padding-right: 5px;
  }
`;

const AlertButton = styled.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
`;
const MessageButton = styled.button`
  background: none;
  border: none;
  outline: none;
  align-items: center;
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  onClick?: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <Layout>
      <LeftLayout>
        {onClick ? (
          <BackButton onClick={onClick}>
            <Icon
              name='arrow_back_ios'
              color='white'
              size={23}
            />
          </BackButton>
        ) : (
          <Logo />
        )}
      </LeftLayout>
      <RightLayout>
        <AlertButton>
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
        </AlertButton>
        <MessageButton>
          <Link pageLink='/message'>
            <Icon
              name='chat'
              color='white'
              size={23}
            />
          </Link>
        </MessageButton>
      </RightLayout>
    </Layout>
  );
};

export default Header;
