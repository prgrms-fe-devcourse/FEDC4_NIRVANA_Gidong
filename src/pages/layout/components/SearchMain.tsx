import { useState } from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
import { SearchFilter } from '@pages/layout/components';
import { SearchMainContainer, SearchResult } from './SearchMain.style';
import { searchUser, searchPost } from '@apis/search';
import { getUser } from '@apis/user';
import { User } from '@/types';
import { FollowUserInfo } from '@pages/profile/components';
import { PostPreview } from '@components/PostPreview';
import { SearchItem } from './SearchMain.style';
import encodeURIValue from '../utils/encodeURIValue';
import filterPostData from '../utils/filterPostData';

interface SearchMainProps {
  inputValue: string;
}

const SearchMain = ({ inputValue }: SearchMainProps) => {
  const [searchFilter, setSearchFilter] = useState('post');

  const searchKeyword = encodeURIValue(inputValue);

  const { data: postData } = useQuery({
    queryKey: ['search', searchKeyword, searchFilter],
    queryFn: async () => {
      const data = await searchPost(searchKeyword);

      return data;
    },
    enabled: searchKeyword !== '' && searchFilter === 'post'
  });

  const filteredData = filterPostData(postData || []);

  const postWithUserData = useQueries({
    queries: filteredData.map((element) => {
      return {
        queryKey: ['searchPostUser', element.author],
        queryFn: () => getUser(element.author),
        select: (data: User) => {
          return {
            ...element,
            author: data
          };
        },
        enabled: filteredData.length > 0
      };
    })
  });

  const { data: userData } = useQuery({
    queryKey: ['search', searchKeyword, searchFilter],
    queryFn: async () => {
      const data = await searchUser(searchKeyword);
      return data;
    },
    enabled: searchKeyword !== '' && searchFilter === 'user'
  });

  const handleChangeFilter = (theme: string) => {
    setSearchFilter(theme);
  };

  const Failed = postWithUserData.filter(
    (element) => !element.isSuccess
  ).length;

  return (
    <SearchMainContainer>
      <SearchFilter
        handleClick={handleChangeFilter}
        filterState={searchFilter}
      />
      <SearchResult>
        {searchFilter === 'post' &&
          Failed === 0 &&
          postWithUserData.map(({ data: post }) => {
            const { _id, likes, comments } = post;

            return (
              <PostPreview
                key={_id}
                post={post}
                totalLikes={likes.length}
                totalComments={comments.length}
                noneProfile={false}
              />
            );
          })}
        {searchFilter === 'user' &&
          userData?.map((element: User) => {
            const { _id, fullName, image, email, isOnline } = element;

            return (
              <SearchItem key={_id}>
                <FollowUserInfo
                  fullName={fullName}
                  image={image}
                  email={email}
                  isOnline={isOnline}
                />
              </SearchItem>
            );
          })}
      </SearchResult>
    </SearchMainContainer>
  );
};

export default SearchMain;
