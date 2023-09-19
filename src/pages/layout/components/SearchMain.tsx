import { useState } from 'react';
import { SearchFilter } from '@pages/layout/components';
import { SearchMainContainer, SearchResult } from './SearchMain.style';

const SearchMain = () => {
  const [filter, setFilter] = useState('post');

  const handleChangeFilter = (theme: string) => {
    setFilter(theme);
  };

  return (
    <SearchMainContainer>
      <SearchFilter
        handleClick={handleChangeFilter}
        filterState={filter}
      />
      <SearchResult>
        {[].map(() => {
          if (filter === 'post') {
            // post component
            return <></>;
          } else {
            // user component
            return <></>;
          }
        })}
      </SearchResult>
    </SearchMainContainer>
  );
};

export default SearchMain;
