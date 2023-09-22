import SearchButton from './SearchButton';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import {
  SearchHeadContainer,
  SearchBox,
  SearchInput
} from './SearchHead.style';
import useDebounce from '@hooks/useDebounce';
import { useEffect, useRef, useState } from 'react';

interface SearchHeadProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
  inputValue: string;
  handleChangeInput: (text: string) => void;
}

const SearchHead = ({
  handleShowSearchBox,
  showSearchBox,

  handleChangeInput
}: SearchHeadProps) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useDebounce(
    300,
    () => {
      if (text === '') handleChangeInput('');
      else handleChangeInput(text);
    },
    [text]
  );

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleClickSearchButton = () => {
    handleChangeInput(text);
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
      <SearchBox>
        <SearchInput
          placeholder='사용자나 게시물을 검색해보세요'
          ref={inputRef}
          value={text}
          onChange={handleChangeText}
        />
        <SearchButton
          searchStatus={showSearchBox}
          handleClickButton={handleClickSearchButton}
        />
      </SearchBox>
    </SearchHeadContainer>
  );
};

export default SearchHead;
