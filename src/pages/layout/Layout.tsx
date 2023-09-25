import { Outlet } from 'react-router';
import { Header } from '@pages/layout/components';
import { LayoutContainer } from './Layout.style';
import { Footer } from '@components/Footer';

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
