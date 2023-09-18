import { useState, useEffect, useCallback } from 'react';

import { StyledPostsPage } from './Posts.style';
import { PostPreview } from '@components/PostPreview';
import { getPosts } from '@apis/posts';
import { editPostData } from './utils/editPostData';
import type { Post } from '@types';

// import { ThemePicker } from '@components/ThemePicker';
// import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';

const Posts = () => {
  // 1. themePicker 컴포넌트에 쓰일 데이터
  // const themeInfo = new Map(meditationChannelInfo);
  // 2. 출력할 포스트 데이터들
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [offeset, setOffset] = useState(0);

  // 3. 포스트 가져오는 함수
  const fetchPosts = useCallback(async () => {
    const data = await getPosts('65003530a72a0d2e63f12878', offeset, 5);
    // console.log(data.data);
    const editedData = editPostData(data.data);
    setPostsData(editedData);
  }, []);

  // 4. useEffect 시 API 로 postsData 상태 변경하기
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    // 5. 렌더링 - themePicker + PostPreview + 무한 스크롤
    <StyledPostsPage>
      {postsData.map((post: Post) => (
        <PostPreview
          post={post}
          totalLikes={post.likes.length}
          totalComments={post.comments.length}
          noneProfile={false}
        />
      ))}
    </StyledPostsPage>
  );
};

export default Posts;
