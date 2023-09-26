import { useEffect, useRef, useState } from 'react';

import useDebounce from '@hooks/useDebounce';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import SearchButton from './SearchButton';
import {
  SearchHeadContainer,
  SearchForm,
  SearchInput
} from './SearchHead.style';

interface SearchHeadProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  searchFilter: string;
  refetch: () => void;
}

const SearchHead = ({
  handleShowSearchBox,
  showSearchBox,
  setSearchInputValue,
  refetch
}: SearchHeadProps) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useDebounce(
    300,
    () => {
      if (text === '') setSearchInputValue('');
      else setSearchInputValue(text);
    },
    [text]
  );

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClickSearchButton = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refetch();
    inputRef.current.blur();
  };

  return (
    <SearchHeadContainer>
      <Button
        width={25}
        height={25}
        handleClick={handleShowSearchBox}>
        <Icon
          name='arrow_back_ios'
          color='white'
          size={25}
        />
      </Button>
      <SearchForm onSubmit={handleClickSearchButton}>
        <SearchInput
          placeholder='사용자나 게시물을 검색해보세요'
          ref={inputRef}
          value={text}
          onChange={handleChangeText}
        />
        <SearchButton searchStatus={showSearchBox} />
      </SearchForm>
    </SearchHeadContainer>
  );
};

export default SearchHead;
