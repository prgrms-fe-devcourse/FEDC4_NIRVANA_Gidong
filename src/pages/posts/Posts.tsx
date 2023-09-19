import { useState, useEffect, useCallback, useRef } from 'react';

import type { Post } from '@types/index';
import { getPosts } from '@apis/posts';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';
import useObserver from './hooks/useObserver';
import { editPostData } from './utils/editPostData';
import { PostPreview } from '@components/PostPreview';
import { ThemePicker } from '@components/ThemePicker';
import { StyledPostsPage, ThemePickerContainer } from './Posts.style';

const Posts = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [offset, setOffset] = useState(0);
  const [observe] = useObserver(() => setOffset(offset + 11));
  const pageRef = useRef(null);
  const themeInfo = new Map(meditationChannelInfo);

  const fetchPosts = useCallback(async () => {
    const data = await getPosts('65003530a72a0d2e63f12878', offset);
    const editedData = editPostData(data.data);

    setPostsData([...postsData, ...editedData]);
  }, [offset]);

  useEffect(() => {
    fetchPosts();
  }, [offset]);

  useEffect(() => {
    if (pageRef && pageRef.current) {
      const { lastChild } = pageRef.current;
      observe(lastChild);
    }
  }, [postsData]);

  return (
    <StyledPostsPage ref={pageRef}>
      <ThemePickerContainer>
        <ThemePicker themeInfo={themeInfo} />
      </ThemePickerContainer>
      {postsData.map((post: Post, index) => (
        <PostPreview
          key={index}
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
