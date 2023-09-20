import { useState, useEffect, useCallback, useRef } from 'react';

import type { Post } from '@/types';
import { getPosts } from '@apis/posts';
import { meditationChannelInfo } from '@pages/meditation/models/channelInfo';
import { PostPreview } from '@components/PostPreview';
import { ThemePicker } from '@components/ThemePicker';
import useObserver from './hooks/useObserver';
import { editPostData } from './utils/editPostData';
import {
  StyledPostsPage,
  ThemePickerContainer,
  PostsContainer
} from './Posts.style';

const Posts = () => {
  const postsRef = useRef(null);
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [offset, setOffset] = useState(0);
  const [observe] = useObserver(() => setOffset(offset + 11));
  const [channelId, setChannelId] = useState('65017a41dfe8db5726b603a7');
  const channelInfo = new Map(meditationChannelInfo);

  const fetchMorePosts = useCallback(async () => {
    if (offset > 0 && postsData.length >= 10) {
      const data = await getPosts(channelId, offset);
      const editedData = editPostData(data.data);

      setPostsData([...postsData, ...editedData]);
    }
  }, [offset]);

  const fetchNewChannel = useCallback(async () => {
    const data = await getPosts(channelId, 0);
    const reformedData = editPostData(data.data);

    setPostsData(reformedData);
    setOffset(0);
  }, [channelId]);

  useEffect(() => {
    fetchNewChannel();
  }, [channelId]);

  useEffect(() => {
    fetchMorePosts();
  }, [offset]);

  useEffect(() => {
    if (postsRef && postsRef.current) {
      const { lastChild } = postsRef.current;
      lastChild && observe(lastChild);
    }
  }, [postsData]);

  const clickThemePicker = (selectedId: string) => {
    setChannelId(selectedId);
  };

  return (
    <StyledPostsPage>
      <ThemePickerContainer>
        <ThemePicker
          themeInfo={channelInfo}
          handleClickTheme={clickThemePicker}
          dark={false}
        />
      </ThemePickerContainer>
      <PostsContainer ref={postsRef}>
        {postsData.map((post: Post, index) => (
          <PostPreview
            key={index}
            post={post}
            totalLikes={post.likes.length}
            totalComments={post.comments.length}
            noneProfile={false}
          />
        ))}
      </PostsContainer>
    </StyledPostsPage>
  );
};

export default Posts;
