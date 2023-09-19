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
}

const SearchHead = ({ handleShowSearch, search }: SearchHeadProps) => {
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
        <SearchInput placeholder='사용자나 게시물을 검색하세요' />
        <SearchButton
          handleClick={handleShowSearch}
          search={search}
        />
      </SearchBox>
    </SearchHeadContainer>
  );
};

export default SearchHead;
