import { useState } from 'react';
import styled from '@emotion/styled';
import { SearchHead, SearchMain } from '@pages/layout/components';

const SearchContainer = styled.div``;

interface SearchProps {
  handleShowSearch: () => void;
  search: boolean;
}

const Search = ({ handleShowSearch, search }: SearchProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchHead
        handleShowSearch={handleShowSearch}
        search={search}
        inputValue={inputValue}
        handleChangeInput={handleChangeInput}
      />
      {true && <SearchMain inputValue={inputValue} />}
    </SearchContainer>
  );
};
export default Search;
