import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { SearchFilter } from '@pages/layout/components';
import { SearchMainContainer, SearchResult } from './SearchMain.style';
import { searchUser, searchPost } from '@apis/search';
import { User, Post } from '@/types';
import { FollowUserInfo } from '@pages/profile/components';
import { PostPreview } from '@components/PostPreview';
import encodeURIValue from '../utils/encodeURIValue';

interface SearchMainProps {
  inputValue: string;
}

const SearchMain = ({ inputValue }: SearchMainProps) => {
  const [searchFilter, setSearchFilter] = useState('post');

  const searchKeyword = encodeURIValue(inputValue);

  const { data } = useQuery({
    queryKey: ['search', searchKeyword, searchFilter],
    queryFn: async () => {
      const data =
        searchFilter === 'post'
          ? await searchPost(searchKeyword)
          : await searchUser(searchKeyword);
      return data;
    },
    enabled: searchKeyword !== ''
  });

  const handleChangeFilter = (theme: string) => {
    setSearchFilter(theme);
  };

  const isPost = (arg: User | Post): arg is Post => {
    if ('title' in arg) {
      return arg.title !== undefined;
    }
  };

  const filteredData = data?.filter((element: User | Post) => {
    if (searchFilter === 'post') {
      return 'title' in element;
    } else {
      return true;
    }
  });

  return (
    <SearchMainContainer>
      <SearchFilter
        handleClick={handleChangeFilter}
        filterState={searchFilter}
      />
      <SearchResult>
        {filteredData?.map((element: User | Post) => {
          if (isPost(element)) {
            // post component
            const { _id, likes, comments } = element;

            return (
              <PostPreview
                key={_id}
                post={element}
                totalLikes={likes.length}
                totalComments={comments.length}
                noneProfile
              />
            );
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
