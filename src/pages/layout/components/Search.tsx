import styled from '@emotion/styled';
import { SearchHead, SearchMain } from '@pages/layout/components';

const SearchContainer = styled.div``;

interface SearchProps {
  handleShowSearch: () => void;
  search: boolean;
}

const Search = ({ handleShowSearch, search }: SearchProps) => {
  return (
    <SearchContainer>
      <SearchHead
        handleShowSearch={handleShowSearch}
        search={search}
      />
      {false && <SearchMain />}
    </SearchContainer>
  );
};
export default Search;