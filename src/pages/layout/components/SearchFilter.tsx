import { Button } from '@components/Button';
import { FilterButtonContainer } from './SearchFilter.style';

interface SearchFilterProps {
  handleClick: (theme: string) => void;
  filterState: string;
}

const SearchFilter = ({ handleClick, filterState }: SearchFilterProps) => {
  const filterData = [
    { theme: 'post', text: '포스트' },
    { theme: 'user', text: '사용자' }
  ];
  return (
    <FilterButtonContainer>
      {filterData.map(({ theme, text }) => (
        <Button
          key={theme + text}
          width={90}
          height={40}
          dark={filterState === theme}
          fontSize={14}
          borderRadius={30}
          color='greyLight'
          handleClick={() => handleClick(theme)}>
          {text}
        </Button>
      ))}
    </FilterButtonContainer>
  );
};

export default SearchFilter;
