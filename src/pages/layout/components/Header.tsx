import { useRecoilState } from 'recoil';
import { HeaderNavSection, HeaderSearchSection } from './Header.style';
import { PathNav, EtcNav, Search } from '@pages/layout/components';
import { openSearch } from '../states/openSearch';


interface HeaderProps {
  pathStatus: 'back' | 'home';
}

const Header = ({ pathStatus }: HeaderProps) => {
  const [showSearchBox, setShowSearchBox] = useRecoilState(openSearch);

  const handleOpenSearchBox = () => {
    setShowSearchBox(true);
  };

  const handleCloseSearchBox = () => {
    setShowSearchBox(false);
  };

  return (
    <>
      {showSearchBox ? (
        <HeaderSearchSection>
          <Search
            showSearchBox={showSearchBox}
            handleShowSearchBox={handleCloseSearchBox}
          />
        </HeaderSearchSection>
      ) : (
        <HeaderNavSection>
          <PathNav pathStatus={pathStatus} />
          <EtcNav
            handleOpenSearchBox={handleOpenSearchBox}
            showSearchBox={showSearchBox}
          />
        </HeaderNavSection>
      )}
    </>
  );
};

export default Header;
