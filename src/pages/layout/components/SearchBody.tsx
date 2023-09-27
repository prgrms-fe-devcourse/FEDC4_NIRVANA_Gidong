import { useState, Suspense } from 'react';
import { SearchFilter } from '@pages/layout/components';
import { SearchResult, SearchResultContainer } from './SearchBody.style';
import encodeURIValue from '../utils/encodeURIValue';
import SearchResultPost from './SearchResultPost';
import SearchResultUser from './SearchResultUser';
import { FILTER } from '../constants';
import {
  SearchPostPreviewSkeleton,
  SearchFollowSkeleton
} from '@components/Skeleton';

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
          <Suspense fallback={<SearchPostPreviewSkeleton />}>
            <SearchResultPost
              searchFilter={searchFilter}
              searchKeyword={searchKeyword}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<SearchFollowSkeleton />}>
            <SearchResultUser
              searchFilter={searchFilter}
              searchKeyword={searchKeyword}
            />
          </Suspense>
        )}
      </SearchResult>
    </SearchResultContainer>
  );
};

export default SearchBody;
