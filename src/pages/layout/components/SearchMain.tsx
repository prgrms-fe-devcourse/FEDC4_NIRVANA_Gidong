import { useState } from 'react';
import { SearchFilter } from '@pages/layout/components';
import { SearchMainContainer, SearchResult } from './SearchMain.style';
import encodeURIValue from '../utils/encodeURIValue';
import SearchResultPost from './SearchResultPost';
import SearchResultUser from './SearchResultUser';
import { FILTER } from '../constants/filter';

interface SearchMainProps {
  inputValue: string;
}

const SearchMain = ({ inputValue }: SearchMainProps) => {
  const [searchFilter, setSearchFilter] = useState(FILTER[0]);

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
        {searchFilter === FILTER[0] ? (
          <SearchResultPost
            searchFilter={searchFilter}
            searchKeyword={searchKeyword}
          />
        ) : (
          <SearchResultUser
            searchFilter={searchFilter}
            searchKeyword={searchKeyword}
          />
        )}
      </SearchResult>
    </SearchMainContainer>
  );
};

export default SearchMain;
