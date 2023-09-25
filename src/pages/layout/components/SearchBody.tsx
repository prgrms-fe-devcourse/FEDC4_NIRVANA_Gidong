import { useState } from 'react';
import { SearchFilter } from '@pages/layout/components';
import { SearchResultContainer, SearchResult } from './SearchBody.style';
import encodeURIValue from '../utils/encodeURIValue';
import SearchResultPost from './SearchResultPost';
import SearchResultUser from './SearchResultUser';
import { FILTER } from '../constants';

interface SearchBodyProps {
  searchInputValue: string;
}

const SearchBody = ({ searchInputValue }: SearchBodyProps) => {
  const [searchFilter, setSearchFilter] = useState(FILTER['POST']);

  const searchKeyword = encodeURIValue(searchInputValue);

  const handleChangeFilter = (theme: string) => {
    setSearchFilter(theme);
  };

  return (
    <SearchResultContainer>
      <SearchFilter
        handleClick={handleChangeFilter}
        filterState={searchFilter}
      />
      <SearchResult>
        {searchFilter === FILTER['POST'] ? (
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
    </SearchResultContainer>
  );
};

export default SearchBody;
