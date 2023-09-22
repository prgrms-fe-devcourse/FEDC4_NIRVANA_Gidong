import { useState } from 'react';
import { SearchFilter } from '@pages/layout/components';
import { SearchMainContainer, SearchResult } from './SearchMain.style';
import encodeURIValue from '../utils/encodeURIValue';
import SearchResultPost from './SearchResultPost';
import SearchResultUser from './SearchResultUser';

interface SearchMainProps {
  inputValue: string;
}

const SearchMain = ({ inputValue }: SearchMainProps) => {
  const [searchFilter, setSearchFilter] = useState('post');

  const searchKeyword = encodeURIValue(inputValue);

  const handleChangeFilter = (theme: string) => {
    setSearchFilter(theme);
  };

  return (
    <SearchMainContainer>
      <SearchFilter
        handleClick={handleChangeFilter}
        filterState={searchFilter}
      />
      <SearchResult>
        <SearchResultPost
          searchFilter={searchFilter}
          searchKeyword={searchKeyword}
        />
        <SearchResultUser
          searchFilter={searchFilter}
          searchKeyword={searchKeyword}
        />
      </SearchResult>
    </SearchMainContainer>
  );
};

export default SearchMain;
