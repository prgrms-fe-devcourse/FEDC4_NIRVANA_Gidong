import { Outlet } from 'react-router';
import { Header, Footer } from '@pages/layout/components';
import { LayoutContainer } from './Layout.style';

interface LayoutProps {
  headerStatus: 'back' | 'home';
}

const Layout = ({ headerStatus }: LayoutProps) => {
  return (
    <>
      <Header pathStatus={headerStatus} />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
