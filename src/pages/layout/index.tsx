import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { LayoutContainer } from './styles';
import Footer from '@/components/Footer';

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
