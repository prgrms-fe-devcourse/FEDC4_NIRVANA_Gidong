import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { LayoutContainer } from './styles';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
