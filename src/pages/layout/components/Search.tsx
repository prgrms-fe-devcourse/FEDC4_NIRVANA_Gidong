import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  SearchHead,
  SearchResults,
  SearchFilter
} from '@pages/layout/components';
import { SearchResultContainer } from './Search.style';
import { searchAll, searchUser } from '@apis/search';
import { FILTER } from '../constants';

interface SearchProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
}

const Search = ({ handleShowSearchBox, showSearchBox }: SearchProps) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchFilter, setSearchFilter] = useState(FILTER['POST']);

  const { data, refetch } = useQuery({
    queryKey: ['search', searchInputValue, searchFilter],
    queryFn: async () => {
      const data =
        searchFilter === FILTER['POST']
          ? await searchAll(searchInputValue)
          : await searchUser(searchInputValue);

      return data;
    },
    enabled: searchInputValue !== ''
  });

  const handleChangeFilter = (theme: string) => {
    setSearchFilter(theme);
  };

  return (
    <>
      <SearchHead
        handleShowSearchBox={handleShowSearchBox}
        showSearchBox={showSearchBox}
        setSearchInputValue={setSearchInputValue}
        searchFilter={searchFilter}
        refetch={() => refetch}
      />
      <SearchResultContainer>
        <SearchFilter
          handleChangeFilter={handleChangeFilter}
          filterState={searchFilter}
        />
        <SearchResults
          searchFilter={searchFilter}
          data={data}
        />
      </SearchResultContainer>
    </>
  );
};
export default Search;
