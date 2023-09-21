import { useState } from 'react';
import styled from '@emotion/styled';
import { SearchHead, SearchMain } from '@pages/layout/components';

const SearchContainer = styled.div``;

interface SearchProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
}

const Search = ({ handleShowSearchBox, showSearchBox }: SearchProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchHead
        handleShowSearchBox={handleShowSearchBox}
        showSearchBox={showSearchBox}
        inputValue={inputValue}
        handleChangeInput={handleChangeInput}
      />
      <SearchMain inputValue={inputValue} />
    </SearchContainer>
  );
};
export default Search;
