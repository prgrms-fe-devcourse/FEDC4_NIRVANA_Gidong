import { useState } from 'react';
import { SearchHead, SearchMain } from '@pages/layout/components';

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
    <>
      <SearchHead
        handleShowSearchBox={handleShowSearchBox}
        showSearchBox={showSearchBox}
        inputValue={inputValue}
        handleChangeInput={handleChangeInput}
      />
      <SearchMain inputValue={inputValue} />
    </>
  );
};
export default Search;
