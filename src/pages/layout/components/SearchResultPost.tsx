import { useQuery, useQueries } from '@tanstack/react-query';
import { searchPost } from '@apis/search';
import { getUser } from '@apis/user';
import { User } from '@/types';
import { PostPreview } from '@components/PostPreview';
import filterPostData from '../utils/filterPostData';

interface SearchResultPostProps {
  searchKeyword: string;
  searchFilter: string;
}

const SearchResultPost = ({
  searchKeyword,
  searchFilter
}: SearchResultPostProps) => {
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

  const Failed = postWithUserData.filter(
    (element) => !element.isSuccess
  ).length;

  return (
    <>
      {searchFilter === 'post' &&
        Failed === 0 &&
        postWithUserData.map(({ data: post }) => {
          const { _id, likes, comments } = post;

          return (
            <PostPreview
              post={post}
              key={_id}
              totalLikes={likes.length}
              totalComments={comments.length}
              noneProfile={false}
            />
          );
        })}
    </>
  );
};
export default SearchResultPost;
