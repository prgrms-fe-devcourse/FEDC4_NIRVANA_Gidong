import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SearchFilter } from '@pages/layout/components';
import { SearchMainContainer, SearchResult } from './SearchMain.style';
import { searchUser, searchPost } from '@apis/search';
import { User, Post } from '@/types';
import { FollowUserInfo } from '@pages/profile/components';

interface SearchMainProps {
  inputValue: string;
}

const SearchMain = ({ inputValue }: SearchMainProps) => {
  const [filter, setFilter] = useState('post');

  const checkHasIncode = (keyword: string) => {
    const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (keyword.match(check_kor)) {
      encodeURI(keyword);
    }
    return keyword;
  };

  const value = checkHasIncode(inputValue);

  const { data } = useQuery({
    queryKey: ['search', value, filter],
    queryFn: async () => {
      const data =
        filter === 'post' ? await searchPost(value) : await searchUser(value);
      return data;
    }
  });

  const handleChangeFilter = (theme: string) => {
    setFilter(theme);
  };

  const isPost = (arg: User | Post): arg is Post => {
    if ('title' in arg) {
      return arg.title !== undefined;
    }
  };

  return (
    <SearchMainContainer>
      <SearchFilter
        handleClick={handleChangeFilter}
        filterState={filter}
      />
      <SearchResult>
        {data?.map((element: User | Post) => {
          if (isPost(element)) {
            // post component
            return <></>;
          } else {
            // user component
            const { _id, fullName, image, email, isOnline } = element;
            return (
              <FollowUserInfo
                key={_id}
                fullName={fullName}
                image={image}
                email={email}
                isOnline={isOnline}
              />
            );
          }
        })}
      </SearchResult>
    </SearchMainContainer>
  );
};

export default SearchMain;
