import { useState } from 'react';
import { HeaderSection } from './Header.style';
import { PathNav, EtcNav, Search } from '@pages/layout/components';

interface HeaderProps {
  backLink?: string;
}

const Header = ({ backLink }: HeaderProps) => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleShowSearchBox = () => {
    setShowSearchBox((prev) => !prev);
  };

  return (
    <HeaderSection showSearchBox={showSearchBox}>
      {showSearchBox ? (
        <Search
          showSearchBox={showSearchBox}
          handleShowSearchBox={handleShowSearchBox}
        />
      ) : (
        <>
          <PathNav backLink={backLink} />
          <EtcNav
            handleShowSearchBox={handleShowSearchBox}
            showSearchBox={showSearchBox}
          />
        </>
      )}
    </HeaderSection>
  );
};

export default Header;
