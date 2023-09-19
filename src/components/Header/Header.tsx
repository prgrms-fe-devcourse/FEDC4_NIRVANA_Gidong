import { useState } from 'react';
import { HeaderSection } from './Header.style';
import { PathNav, EtcNav, Search } from '@components/Header';

interface HeaderProps {
  backLink?: string;
}

const Header = ({ backLink }: HeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <HeaderSection search={showSearch}>
      {showSearch ? (
        <Search
          search={showSearch}
          handleShowSearch={handleShowSearch}
        />
      ) : (
        <>
          <PathNav backLink={backLink} />
          <EtcNav
            handleShowSearch={handleShowSearch}
            search={showSearch}
          />
        </>
      )}
    </HeaderSection>
  );
};

export default Header;
