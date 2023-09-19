import { Outlet } from 'react-router';
import { Header } from '@components/Header';
import { LayoutContainer } from './Layout.style';
import { Footer } from '@components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
