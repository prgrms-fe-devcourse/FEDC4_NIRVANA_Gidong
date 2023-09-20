import SearchButton from './SearchButton';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import {
  SearchHeadContainer,
  SearchBox,
  SearchInput
} from './SearchHead.style';

interface SearchHeadProps {
  handleShowSearch: () => void;
  search: boolean;
  inputValue: string;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchHead = ({
  handleShowSearch,
  search,
  inputValue,
  handleChangeInput
}: SearchHeadProps) => {
  return (
    <SearchHeadContainer>
      <Button
        width={25}
        height={25}
        handleClick={handleShowSearch}>
        <Icon
          name='arrow_back_ios'
          color='white'
          size={25}
        />
      </Button>
      <SearchBox>
        <SearchInput
          placeholder='사용자나 게시물을 검색하세요'
          value={inputValue}
          onChange={(event) => {
            handleChangeInput(event);
          }}
        />
        <SearchButton
          handleClick={() => {}}
          search={search}
        />
      </SearchBox>
    </SearchHeadContainer>
  );
};

export default SearchHead;
