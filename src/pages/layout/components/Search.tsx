import { useState } from 'react';
import { SearchBody, SearchHead } from '@pages/layout/components';

interface SearchProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
}

const Search = ({ handleShowSearchBox, showSearchBox }: SearchProps) => {
  const [searchInputValue, setSearchInputValue] = useState('');

  return (
    <>
      <SearchHead
        handleShowSearchBox={handleShowSearchBox}
        showSearchBox={showSearchBox}
        setSearchInputValue={setSearchInputValue}
      />
      <SearchBody searchInputValue={searchInputValue} />
    </>
  );
};
export default Search;
