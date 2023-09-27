import { Outlet } from 'react-router';
import { LayoutContainer } from './Layout.style';
import { Header } from './components';
import { Footer } from './components';

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
