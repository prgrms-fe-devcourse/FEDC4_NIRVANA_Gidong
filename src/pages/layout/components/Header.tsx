import { useState } from 'react';
import { HeaderNavSection, HeaderSearchSection } from './Header.style';
import { PathNav, EtcNav, Search } from '@pages/layout/components';

interface HeaderProps {
  pathStatus: 'back' | 'home';
}

const Header = ({ pathStatus }: HeaderProps) => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleShowSearchBox = () => {
    setShowSearchBox((prev) => !prev);
  };

  return (
    <>
      {showSearchBox ? (
        <HeaderSearchSection>
          <Search
            showSearchBox={showSearchBox}
            handleShowSearchBox={handleShowSearchBox}
          />
        </HeaderSearchSection>
      ) : (
        <HeaderNavSection>
          <PathNav pathStatus={pathStatus} />
          <EtcNav
            handleShowSearchBox={handleShowSearchBox}
            showSearchBox={showSearchBox}
          />
        </HeaderNavSection>
      )}
    </>
  );
};

export default Header;
