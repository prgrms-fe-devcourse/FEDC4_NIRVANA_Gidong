import SearchButton from './SearchButton';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import {
  SearchHeadContainer,
  SearchBox,
  SearchInput
} from './SearchHead.style';

interface SearchHeadProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
  inputValue: string;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchHead = ({
  handleShowSearchBox,
  showSearchBox,
  inputValue,
  handleChangeInput
}: SearchHeadProps) => {
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
          value={inputValue}
          onChange={(event) => {
            handleChangeInput(event);
          }}
        />
        <SearchButton searchStatus={showSearchBox} />
      </SearchBox>
    </SearchHeadContainer>
  );
};

export default SearchHead;
